from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name = "products"),
    path('top/', views.getTopProducts, name = "top-products"),
    path('<str:pk>', views.getProduct, name = "product"),
    path('create/', views.createProduct, name = "create-product"),
    path('upload/', views.uploadImage, name = "upload-image"),
    path('update/<str:pk>', views.updateProduct, name = "update-product"),
    path('delete/<str:pk>', views.deleteProduct, name = "delete-product"),
    path('<str:pk>/reviews', views.createProductReview, name = "create-review"),

]