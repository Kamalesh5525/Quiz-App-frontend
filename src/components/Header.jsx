// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{backgroundColor:"#508C9B"}} expand="lg">
      <Container>
        <Navbar.Brand href="/" className='text-white'>Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav d-block" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='text-light'>Back to Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;