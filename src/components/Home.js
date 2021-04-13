import React from "react";
import { NavLink } from "react-router-dom";
import { Fade, Bounce } from "react-reveal";
import Typical from "react-typical";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <section id="home">
        <div className="home-content container my-auto">
          <Bounce left>
            <h2 className="text-left">Hi!</h2>
          </Bounce>
          <Fade>
            <h1 className="text-left">
              I'm <span className="p-1">Juliana.</span>
            </h1>
          </Fade>
          <p className="text-left text-muted mt-3">
            <Typical
              className="text-uppercase"
              steps={[
                "Web Developer",
                3000,
                "Plant Enthusiast",
                2000,
                "Musician",
                2000,
                "Nerd Friend",
                1500,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
          <Fade bottom>
            <NavLink to="/about">What I do</NavLink>
          </Fade>
        </div>
      </section>
    </div>
  );
}
