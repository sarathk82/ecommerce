import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Product from '../component/Product';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { Row, Col } from 'react-bootstrap';
import { listProducts } from '../actions/ProductActions';

function HomeScreen() {

    const dispatch = useDispatch();
    const location = useLocation();
    const productList = useSelector(state => state.productList);
    const { error, loading, products } = productList;

    let params = new URLSearchParams(location.search);
    let keyword = params.get('search');

    useEffect(() => {

        dispatch(listProducts(keyword));

    }, [dispatch, keyword]);


    return (
        <div>
            <h1>
                Latest Products
            </h1>
            {loading ? <Loader />
                : error ? <Message variant='danger' >{error}</Message>
                    :
                    <Row>
                        {products.map(product => (

                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    );
}

export default HomeScreen;