import React from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import { paths } from '../../routes';

const Navigation = () => {
    const { isAuthenticated } = useSelector(state=>state.auth)
    const NavItems = () => (
        <>
            <LinkContainer to={paths.home}>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={paths.users}>
                <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            {!isAuthenticated ? 
            <>
                <LinkContainer to={paths.signUp}>
                    <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
                <LinkContainer to={paths.login}>
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
            </> :
            <>
                <LinkContainer to={paths.profile}>
                    <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to={paths.logout}>
                    <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
            </>}
        </>
    )

    return <Nav><NavItems /></Nav>
}

export default Navigation;