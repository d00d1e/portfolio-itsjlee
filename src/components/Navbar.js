import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
import logo from "../assets/img/brand-logo64.svg";

export default function NavigationBar() {
  return (
    <Fade top>
      <nav className="navbar navbar-nav navbar-expand-md navbar-light text-uppercase mx-auto py-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand pl-5" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse text-center pl-5" id="navbarNav">
            <ul
              className="navbar-nav ml-auto"
              data-toggle="collapse"
              data-target="#navbarNav"
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link px-4"
                  activeClassName="active"
                  exact
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-4"
                  activeClassName="active"
                  exact
                  to="/projects"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-4"
                  activeClassName="active"
                  exact
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fade>
  );
}
