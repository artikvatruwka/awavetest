import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';

const Layout = ({children}) => {
    return (
        <Container>
            <Navigation />
            {children}
        </Container>
    )
}

export default Layout;