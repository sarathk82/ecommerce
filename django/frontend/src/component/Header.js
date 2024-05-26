import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/UserActions';
import SearchBox from './SearchBox';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {

    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (

        <header>
            <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">Any Shop</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />

                        <Nav className='ml-auto'>
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>

                            {userInfo && Object.keys(userInfo).length ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href="/login"><i className='fas fa-user'></i>Login</Nav.Link>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/users'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/products'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orders'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>


    );
}

export default Header;