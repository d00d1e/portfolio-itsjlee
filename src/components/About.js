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
        <h1 className="outline text-center pt-4">
          <Typical
            className="justify-content-center mt-5"
            steps={["About", 4000]}
            loop={1}
            wrapper="p"
          />
        </h1>
        <div className="about-container row my-auto">
          <div className="about-img col-xl-6 d-flex flex-column align-items-center pt-5">
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
            <Fade bottom>
              <div className="text-center text-uppercase pt-5 pb-5">
                <NavLink to="/projects">View My Work</NavLink>
              </div>
            </Fade>
          </div>
          <div className="about-text-container col-xl-6 d-flex flex-column justify-content-center align-items-center">
            <div className="about-text m4 p-4 pt-4 pb-4">
              <Fade>
                <p className="text-center mt-3 mb-3">
                  I am a self-taught <u>Junior Full Stack Developer</u> from
                  Boston, based in the the SF Bay Area. I build scalable,
                  efficent and user-friendly web applications.
                </p>
                <p className="text-center mt-3 mb-3">
                  I have a background in pharmaceuticals and spent 10 years
                  working with patients in various outpatient pharmacies. Albeit
                  gratifying and enjoyable, I was in a new phase of my life with
                  new aspirations and wanted challenges that would push me out
                  of my comfort zone. Web development has given me the power to
                  be creative while building with code, tests my analytical and
                  problem-solving skills and most importantly, allows me to
                  contribute to the tech community.
                </p>
                <p className="text-center mb-2">
                  I have 2+ years of experience working with JavaScript, JS
                  frameworks (React, Angular, Vue) and backend technologies such
                  as node/express, mongoDB and graphQL. I love to learn and
                  explore new technologies to challenge myself to become a
                  better developer.
                </p>
                <h1 className="text-center">☺︎</h1>
                <p className="text-center mt-2 mb-3">
                  When I'm not coding, I enjoy making music with my kalimba,
                  playing League, tending my urban jungle and traveling with my
                  cat, Moose.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
