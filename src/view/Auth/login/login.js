import React from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

import {
  FaGoogle,
  FaGithub
} from "react-icons/fa";

import {
  Link
} from "react-router-dom";

import "./login.scss";

function Login() {

  return (

    <section className="auth-page">

      <Container>

        <Row className="justify-content-center">

          <Col lg={5}>

            <div className="auth-card">

              <h1>
                Welcome Back
              </h1>

              <p>
                Login to continue exploring
                viral bloopers.
              </p>

              <Form>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Email Address
                  </Form.Label>

                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  />

                </Form.Group>

                <Form.Group className="mb-4">

                  <Form.Label>
                    Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                  />

                </Form.Group>

                <Button className="auth-btn">

                  Login

                </Button>

              </Form>

              <div className="divider">

                OR

              </div>

              <div className="social-buttons">

                <Button>

                  <FaGoogle />

                  Google

                </Button>

                <Button>

                  <FaGithub />

                  GitHub

                </Button>

              </div>

              <p className="switch-auth">

                Don’t have an account?

                <Link to="/signup">

                  Sign Up

                </Link>

              </p>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default Login;