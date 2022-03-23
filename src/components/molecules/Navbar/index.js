import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-light p-3 border-bottom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link
          className="navbar-brand text-center d-none d-lg-block text-uppercase mp-0 fw-bolder fs-5"
          to="#"
        >
          adam widmanski
        </Link>

        <div className="navbar-brand d-flex justify-content-center align-items-center">
          <Link className="text-decoration-none" to="#">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>

        <div className="collapse navbar-collapse mt-3" id="navbarNav">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" aria-current="page" to="#">
                work
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                home
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center" to="#">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
