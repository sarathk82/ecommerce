import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';




function SearchBox() {

    const [keyword, setKeyword] = useState('');
    const history = useNavigate();

    const location = useLocation();

    const submitHandlder = (e) => {
        e.preventDefault();
        if (keyword) {
            history(`/?search=${keyword}&page=1`);
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