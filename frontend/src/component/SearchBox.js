import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/ProductActions';


function SearchBox() {

    const [keyword, setKeyword] = useState('');
    const history = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const submitHandlder = (e) => {
        e.preventDefault();
        if (keyword) {
            dispatch(listProducts(keyword));
            history(`/?search=${keyword}`);
        } else {
            history(location.pathname);
        }
    };

    return (
        <Form onSubmit={submitHandlder} className='d-flex align-items-center'>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-2'
            >
            </Form.Control>

            <Button type='submit' variant='outline-success' >Search</Button>
        </Form>
    );
};

export default SearchBox;