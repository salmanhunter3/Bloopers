import React from "react";

import {
  Navbar,
  Nav,
  Container,
  Button
} from "react-bootstrap";

import {
  Link
} from "react-router-dom";

import {
  BsChevronRight
} from "react-icons/bs";

import "./header.scss";

function Header() {

  return (

    <Navbar
      expand="lg"
      className="custom-navbar"

    >

      <Container>

        {/* LOGO */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="logo"
        >
          BLOOPERS
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />

        {/* NAVBAR LINKS */}
        <Navbar.Collapse
          id="basic-navbar-nav"
        >

          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/landings"
            >
              Landings
              <BsChevronRight className="ms-1" />
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/pages"
            >
              Pages
              <BsChevronRight className="ms-1" />
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/documentation"
            >
              Documentation
              <BsChevronRight className="ms-1" />
            </Nav.Link>

         

            <Button
              className="buy-btn ms-lg-4 mt-3 mt-lg-0"
            >
              Buy Now
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Header;