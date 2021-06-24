import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bounce, Slide } from "react-reveal";
import ReactCardFlip from "react-card-flip";
import Typical from "react-typical";

import { motion } from "framer-motion";
import { FadeDown, FadeIn, transition } from "../assets/animations";

import headshot1 from "../assets/img/headshot1.png";
import headshot3 from "../assets/img/headshot3.png";

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
      <motion.div
        id="about"
        // initial="in"
        // animate="out"
        // exit="out"
        // variants={FadeIn}
        // transition={transition}
      >
        <section>
          <Typical
            className="justify-content-center title outline text-center mx-auto pt-5"
            steps={["About", 4000]}
            loop={1}
            wrapper="h1"
          />
          <p className="caption text-center">Me, Myself, and I</p>
          <div className="about-container row my-auto">
            <div className="about-img col-xl-5 d-flex flex-column align-items-center my-auto">
              <Slide left>
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
                    src={headshot3}
                    alt="JLee Headshot"
                    fluid="true"
                    onClick={this.handleClick}
                  />
                </ReactCardFlip>
              </Slide>
              <Bounce bottom>
                <div className="text-center text-uppercase pt-5 pb-5 m-0">
                  <Link to="/projects">View My Work</Link>
                </div>
              </Bounce>
            </div>
            <Slide right>
              <div className="about-text-container col-xl-7 d-flex flex-column justify-content-center align-items-center">
                <div className="about-text p-4">
                  <p className="text-center mt-3 mb-3">
                    I am a self-taught <u>Junior Full Stack Developer</u> based
                    in the the SF Bay Area. I build scalable, efficent and
                    user-friendly web applications.
                  </p>
                  <p className="text-center mt-3 mb-3">
                    I have a background in pharmaceuticals and spent 10 years
                    working with patients in various outpatient pharmacies.
                    Albeit gratifying and enjoyable, I was in a new phase of my
                    life with new aspirations and wanted challenges that would
                    push me out of my comfort zone. Web development has given me
                    the ability to be creative while building with code, tests
                    my analytical and problem-solving skills and most
                    importantly, contributing to the future of tech.
                  </p>
                  <p className="text-center mb-2">
                    I have 2+ years of experience working with JavaScript, JS
                    frameworks (React, Angular, Vue) and backend technologies
                    such as node/express, mongoDB and graphQL. I love to learn
                    and explore new technologies to challenge myself to become a
                    better developer.
                  </p>
                  <h1 className="text-center">☻</h1>
                  <p className="text-center mt-2">
                    When I'm not coding, I enjoy making music with my kalimba,
                    playing League, tending my urban jungle and traveling with
                    my cat, Moose.
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </section>
      </motion.div>
    );
  }
}
