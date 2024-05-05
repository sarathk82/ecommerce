from operator import truediv
from pickle import GET
from django.shortcuts import render

from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import Product,Review
from base.serializers import ProductSerializer
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



# Create your views here.
@api_view(['GET'])
def getProducts(request): 
    query = request.query_params.get('search')
    if query == None:
        query = '' 
    products = Product.objects.filter(name__icontains=query).order_by('_id')

    page = request.query_params.get('page')
    paginator = Paginator(products, 2)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    
    page = int(page)
    serializer = ProductSerializer(products,many = True)
    return Response({'products':serializer.data, 'page':page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getProduct(request,pk): 
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many = False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request,pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    #1 - Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail':'Product already reviewed'}
        return Response(content, status = status.HTTP_400_BAD_REQUEST)
    
    
    #2 - No rating or 0

    elif data['rating'] == 0:
        content = {'detail':'Please select a rating'}
        return Response(content, status = status.HTTP_400_BAD_REQUEST)
    
    # Create review

    else:
        review = Review.objects.create(
            user = user,
            product = product,
            name = user.first_name,
            rating = data['rating'],
            comment = data['comment']
        )

        product.numReviews = product.review_set.all().count()

   

        total = 0 
        for i in product.review_set.all():
            total += i.rating
        product.rating = total / product.numReviews
        product.save()

        return Response('Review Added')