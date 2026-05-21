import React, {
  useEffect,
  useState
} from "react";

import {
  Navbar,
  Nav,
  Container,
  Button
} from "react-bootstrap";

import {
  Link
} from "react-router-dom";



import "./header.scss";

function Header({
  darkMode,
  setDarkMode
}) {

  const [scrollNavbar, setScrollNavbar] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (



    <Navbar
      expand="lg"
      fixed="top"
      className={
        scrollNavbar
          ?
          "custom-navbar scrolled"
          :
          "custom-navbar"
      }
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
              to="/challenges"
            >
              Challenges
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/explore"
            >
              Explore
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/upload"
            >
              Upload
            </Nav.Link>

            {/* CREATOR LINK */}

            <Nav.Link
              as={Link}
              to="/creator"
            >
              Creators
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/premium"
            >
              Premium
            </Nav.Link>

            <Button
              className="theme-btn me-3"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >

              {
                darkMode
                  ?
                  "☀️"
                  :
                  "🌙"
              }

            </Button>

            <Button
              as={Link}
              to="/login"
              className="buy-btn mt-3 mt-lg-0"
            >
              Login
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default Header;