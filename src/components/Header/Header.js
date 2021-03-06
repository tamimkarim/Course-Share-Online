import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className ="header fixed-top">
            <Navbar bg="dark" variant="dark ">
                <Navbar.Brand href="#course-share-online">CSO</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#courses">Courses</Nav.Link>
                <Nav.Link href="#blog">Blogs</Nav.Link>
                </Nav>
                <Nav.Link href="#cart"> <FontAwesomeIcon icon={faShoppingCart} />  </Nav.Link>
               
                <Form inline>
                <FormControl type="text" placeholder="Search Course" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
  
        </div>
    );
};

export default Header;