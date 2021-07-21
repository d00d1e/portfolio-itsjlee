import { NavLink } from "react-router-dom";
import React from "react";

import { motion } from "framer-motion";
import { SlideDown, transition } from "../assets/animations";

import logo from "../assets/img/brand-logo64.svg";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar navbar-nav navbar-expand-lg navbar-light text-uppercase mx-auto p-3"
      initial="in"
      animate="out"
      exit="in"
      variants={SlideDown}
      transition={transition}
    >
      <div className="container-fluid w-75">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="64px" height="53px" />{" "}
          <span>Juliana Y. Lee</span>
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
        <div className="collapse navbar-collapse text-center" id="navbarNav">
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
    </motion.nav>
  );
}
