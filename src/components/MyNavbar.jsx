import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar className='navBg' variant='dark' expand='true'>
      <Navbar.Brand href='#home'></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Link href='#Me'>Home</Nav.Link>
          <Nav.Link href='#skills'>Skills</Nav.Link>
          <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
          <Nav.Link href='#Contact'>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
