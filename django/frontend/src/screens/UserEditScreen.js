import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import FormContainer from '../component/FormContainer';
import Loader from '../component/Loader';
import { USER_UPDATE_RESET } from '../constants/UserConstants';
import { getUserProfile, updateUser } from '../actions/UserActions';


const EditUserScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setAdmin] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useNavigate();
    const [message, setMessage] = useState('');



    const userProfile = useSelector(state => state.userProfile);

    const { error, loading, user } = userProfile;


    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdateProfile;

    useEffect(() => {


        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            history('/admin/users');
        } else {

            if (!user || !user.name || user._id !== Number(id)) {

                dispatch(getUserProfile(id));
                console.log(name);

            } else {
                setName(user.name);
                setEmail(user.email);
                setAdmin(user.isAdmin);
            }
        }


    }, [user, successUpdate, dispatch]);

    const SubmitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ _id: user._id, name, email, isAdmin }));
        setMessage('');
        setMessage('User Details Updated Successfully');

    };

    return (
        <div>
            <Link to='/admin/users' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loading && <Loader />}
                {message && <Message variant='info'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                <Form onSubmit={SubmitHandler}>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control

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

                            type='email'
                            placeholder='Enter Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='isadmin'>
                        <Form.Check

                            type='checkbox'
                            label='is Admin'
                            checked={isAdmin}
                            onChange={(e) => setAdmin(e.target.checked)}
                        >
                        </Form.Check>
                    </Form.Group>

                    <Button style={{ marginTop: '20px' }} type='submit' variant='primary'>
                        Update
                    </Button>

                </Form>


            </FormContainer >

        </div>

    );

};
export default EditUserScreen;