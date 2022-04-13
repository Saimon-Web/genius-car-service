
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


import useFirebase from '../../../hooks/useFirebase';

import logo from '../../../images/logo-black.png'

const Header = () => {

    const { user, handleSignOut } = useFirebase();


    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="160"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        {
                            user?.uid ? <button onClick={handleSignOut}>sign out</button> :
                                <Nav.Link href="/login">Login</Nav.Link>
                        }


                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;