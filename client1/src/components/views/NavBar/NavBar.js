import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  ButtonToolbar,
  Button,
} from "react-bootstrap";
import "./NavBar.css";

const BasicExample = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Tube
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sign up</Nav.Link>
          </Nav>
          <ButtonToolbar>
            <Button bsStyle="warning" href="/video/upload">
              Video
            </Button>
          </ButtonToolbar>
        </Container>
      </Navbar>
    </>
  );
};

export default BasicExample;
