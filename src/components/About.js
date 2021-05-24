import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
import ReactCardFlip from "react-card-flip";
import Typical from "react-typical";

import headshot1 from "../assets/img/headshot1.png";
import headshot2 from "../assets/img/headshot2.png";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <section id="about">
        <div className="about-container row my-auto m-4 pt-4">
          <div className="about-img col-xl-6 d-flex flex-column justify-content-center align-items-center">
            <Fade>
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
              >
                <img
                  rel="preload"
                  as="image"
                  src={headshot1}
                  alt="JLee Headshot"
                  fluid="true"
                  onClick={this.handleClick}
                />
                <img
                  rel="preload"
                  as="image"
                  src={headshot2}
                  alt="JLee Headshot"
                  fluid="true"
                  onClick={this.handleClick}
                />
              </ReactCardFlip>
            </Fade>
          </div>
          <div className="about-text-container col-xl-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="outline m-1">
              <Typical
                className="justify-content-center mt-5"
                steps={["About me", 4000]}
                loop={1}
                wrapper="p"
              />
            </h1>
            <div className="about-text m4 p-4 pt-4 pb-4">
              <Fade>
                <p className="text-center mb-3">
                  I am a self-taught <u>Web Developer</u> based in the SF Bay
                  Area. I build/optimize interactive, user-friendly,
                  feature-rich websites &#38; web applications.
                </p>
                <p className="text-center mb-2">
                  I have 2+ years of experience working with JavaScript, JS
                  frameworks (React, Angular, Vue) and backend technologies such
                  as node/express, mongoDB and graphQL. I also like to explore
                  and learn new technologies to challenge myself to become a
                  better developer.
                </p>
                <h1 className="text-center">☺︎</h1>
                <p className="text-center">
                  When I'm not coding, I enjoy making music with my kalimba,
                  tending my urban garden and traveling with my cat, Moose.
                </p>
              </Fade>
            </div>
            <Fade bottom>
              <div className="text-center text-uppercase mt-5 mb-5">
                <NavLink to="/projects">View My Work</NavLink>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}
