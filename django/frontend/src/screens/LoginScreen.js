import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import FormContainer from '../component/FormContainer';
import Loader from '../component/Loader';
import { login } from '../actions/UserActions';




function LoginScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const userLogin = useSelector(state => state.userLogin);

    const { error, loading, userInfo } = userLogin;

    useEffect(() => {

        if (userInfo && Object.keys(userInfo).length) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        //Dispatch Login
        dispatch(login(email, password));
        
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={SubmitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Button style={{ marginTop: '20px' }} type='submit' variant='primary'>
                    Sign In
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer >


    );
}

export default LoginScreen;