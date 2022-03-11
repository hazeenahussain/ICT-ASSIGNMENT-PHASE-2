import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

const NavbarAssociate = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <img className="logo" src="./logo.png" width="90px" height="90px" />

        <div className="container-fluid navmove">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            ASSOCIATE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/dashboardassociate" className="nav-link active">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addhall" className="nav-link">
                  Book{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookinglist" className="nav-link">
                  Events{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/viewcalendar" className="nav-link">
                  Calendar
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    props.setlogout(1);
                    props.setloggedin(0);
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAssociate;
