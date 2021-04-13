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
        <div className="row my-auto m-4 mt-5 pt-4">
          <div className="about-img col-xl-6 d-flex justify-content-center align-items-center">
            <Fade>
              <ReactCardFlip
                isFlipped={this.state.isFlipped}
                flipDirection="horizontal"
              >
                <img
                  src={headshot1}
                  alt="JLee Headshot"
                  fluid="true"
                  onClick={this.handleClick}
                />
                <img
                  src={headshot2}
                  alt="JLee Headshot"
                  fluid="true"
                  onClick={this.handleClick}
                />
              </ReactCardFlip>
            </Fade>
          </div>
          <div className=" col-xl-5 my-auto">
            <div className="about-text mb-5 mt-5">
              <h1 className="mb-5">
                <Typical
                  className="text-center mb-5"
                  steps={["Nice to meet you.", 3000]}
                  loop={1}
                  wrapper="p"
                />
              </h1>
              <Fade>
                <p className="text-center m-2">
                  I am a front end web developer based in the SF Bay Area. I
                  like to work with JavaScript, React and NodeJS and have also
                  dabbled in backend development. I have a passion for building
                  and optimizing interactive, user-friendly, feature-rich
                  websites and web applications.
                </p>
                <h1 className="text-center m-2">☺︎</h1>
                <p className="text-center m-2 mb-3">
                  When I'm not coding, I enjoy playing the kalimba, tending my
                  urban garden and hiking with my cat Moose.
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
