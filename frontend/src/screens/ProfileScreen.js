import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { getUserProfile, updateUserProfile } from '../actions/UserActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/UserConstants';


function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


    const userProfile = useSelector(state => state.userProfile);
    const { error, loading, user } = userProfile;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;


    useEffect(() => {

        if (!userInfo) {

            navigate('/login');
        }
        else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserProfile('profile'));
            }
            else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [navigate, dispatch, userInfo, user, success]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        //Dispatch Register
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {

            dispatch(updateUserProfile({ 'id': user._id, 'name': name, 'email': email, 'password': password }));
            setMessage('');
            setMessage('User Details Updated Successfully');
        };

    };

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={SubmitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            required
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

                    <Form.Group controlId='passwordConfirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control

                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>


                    <Button style={{ marginTop: '20px' }} type='submit' variant='primary'>
                        Update
                    </Button>

                </Form>
            </Col>

            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>

    );



}

export default ProfileScreen;