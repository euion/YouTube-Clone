import React from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import {
  Drawer,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  ButtonToolbar,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import axios from "axios";

const BasicExample = (loginSuccess, setLoginSuccess) => {
  const onClickHandler = () => {
    axios.get("api/users/logout").then((response) => {
      if (response.data.success) {
        Navigate("/login");
      } else {
        alert("로그아웃에 실패하였습니다.");
      }
      console.log(response.data);
    });
  };
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
            {loginSuccess ? (
              <Nav.Link href="/login" onClick={() => setLoginSuccess(false)}>
                Login
              </Nav.Link>
            ) : (
              <Nav.Link onClick={onClickHandler}>Logout</Nav.Link>
            )}

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
