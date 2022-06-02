import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Lab Practical - Shivanshu Tomar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
