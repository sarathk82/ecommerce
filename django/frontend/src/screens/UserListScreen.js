import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { deleteUser, listUsers } from '../actions/UserActions';
import { useNavigate } from 'react-router-dom';

function UserListScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userList = useSelector(state => state.userList);
    const { loading, error, users } = userList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userDelete = useSelector(state => state.userDelete);
    const { success: successDelete } = userDelete;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
        }
        else {
            navigate('/login');
        }
    }, [dispatch, navigate, userInfo, successDelete]);


    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id));
        }

    };


    return (
        <div>
            <h2>Users</h2>
            {loading ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ADMIN</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users && users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td><a href={`mailto:abc@abc.com`}>{user.email}</a></td>
                                        <td>
                                            {user.isAdmin ? (
                                                <i className='fas fa-check' style={{ color: 'green' }}></i>
                                            ) : (
                                                <i className='fas fa-xmark' style={{ color: 'red' }}></i>
                                            )}
                                        </td>
                                        <td>
                                            <LinkContainer to={`/admin/user/${user._id}`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>


                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>

                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}

        </div >
    );


}
export default UserListScreen;