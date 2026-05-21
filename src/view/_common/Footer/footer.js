// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className={
      darkMode
        ?
        "footer-section dark-footer"
        :
        "footer-section light-footer"
    }>
      {/* Top Curve Section */}
      <div
        style={{
          background: "linear-gradient(90deg, #005bea 0%, #6a11cb 100%)",
          borderBottomLeftRadius: "50% 10%",
          borderBottomRightRadius: "50% 10%",
          color: "#fff",
          padding: "80px 0 120px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4">Get the app!</h1>

          <p className="mt-3 fs-5 text-light">
            Buy and sell items from your device with our new mobile app!
          </p>


          <p className="mt-3 small text-light">
            * Requires Android OS 4.3+ or Apple iOS 9.3+
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-5">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-3">
            <h4 className="fw-bold text-secondary">BLOOPERS</h4>

            <p className="text-muted">Build better websites</p>

            <div className="d-flex gap-3 fs-5 text-secondary">
              <FaInstagram />
              <FaFacebookF />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>

          {/* Product */}
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase text-secondary mb-3">
              Product
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Landing
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Pages
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Sections
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Documentation
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Technical */}
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase text-secondary mb-3">
              Technical
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Documentation
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Changelog
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Theme Customizer
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  UI Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Includes */}
          <div className="col-md-3">
            <h6 className="fw-bold text-uppercase text-secondary mb-3">
              Includes
            </h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Utilities
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Components
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Layouts
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Code Samples
                </a>
              </li>

              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-muted mb-2 mb-md-0">
            © 2025 Your Company. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="/" className="text-decoration-none text-muted">
              Privacy Policy
            </a>

            <a href="/" className="text-decoration-none text-muted">
              Terms & Conditions
            </a>

            <a href="/" className="text-decoration-none text-muted">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 