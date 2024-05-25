import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Product from '../component/Product';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/ProductActions';
import Paginate from '../component/Paginate';
import ProductCarousel from '../component/ProductCarousel';

function HomeScreen() {

    const dispatch = useDispatch();
    const location = useLocation();
    const productList = useSelector(state => state.productList);
    const { error, loading, products, page, pages } = productList;



    let keyword = location.search;

    useEffect(() => {

        dispatch(listProducts(keyword));

    }, [dispatch, keyword]);


    return (
        <div>
            {!keyword && <ProductCarousel />}

            <h1>
                Latest Products
            </h1>
            {loading ? <Loader />
                : error ? <Message variant='danger' >{error}</Message>
                    :
                    <div>
                        <Row >
                            {products.map(product => (

                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    );
}

export default HomeScreen;