import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container py-2">

        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end pe-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0 gap-4">

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/signup"
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/product"
              >
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/support"
              >
                Support
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;