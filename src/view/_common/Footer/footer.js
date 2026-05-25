import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import {
  Link
} from "react-router-dom";

const Footer = ({ darkMode }) => {

  return (

    <footer
      className={
        darkMode
          ?
          "footer-section dark-footer"
          :
          "footer-section light-footer"
      }
    >

      <div className="app-footer">

        {/* TOP */}

        <div className="footer-top">

          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

            <h2 className="footer-logo">

              BLOOPERS

            </h2>

            <div className="social-icons">

              <Link to="/">
                <FaInstagram />
              </Link>

              <Link to="/">
                <FaFacebookF />
              </Link>

              <Link to="/">
                <FaTwitter />
              </Link>

              <Link to="/">
                <FaGithub />
              </Link>

            </div>

          </div>

        </div>

        {/* MIDDLE */}

        <div className="footer-middle container py-5">

          <div className="row">

            {/* PRODUCT */}

            <div className="col-md-3 mb-4 mb-md-0">

              <h5>
                Product
              </h5>

              <ul>

                <li>
                  <Link to="/">
                    Landing
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Pages
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Features
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Documentation
                  </Link>
                </li>

              </ul>

            </div>

            {/* RESOURCES */}

            <div className="col-md-3 mb-4 mb-md-0">

              <h5>
                Resources
              </h5>

              <ul>

                <li>
                  <Link to="/">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Tutorials
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Guides
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Community
                  </Link>
                </li>

              </ul>

            </div>

            {/* SUPPORT */}

            <div className="col-md-3 mb-4 mb-md-0">

              <h5>
                Support
              </h5>

              <ul>

                <li>
                  <Link to="/">
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    Terms Of Service
                  </Link>
                </li>

              </ul>

            </div>

            {/* APP BUTTONS */}

            <div className="col-md-3">

              <h5>
                Download App
              </h5>

              <div className="app-buttons mt-3">

                <button className="btn btn-dark">

                  App Store

                </button>

                <button className="btn btn-dark ms-2">

                  Google Play

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom py-4 text-center">

          <p className="mb-0">

            © 2025 BLOOPERS.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;