import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bounce, Slide } from "react-reveal";
import Typical from "react-typical";

import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

import headshot from "../assets/img/headshot.png";

export default class About extends Component {
  render() {
    return (
      <motion.div
        id="about"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={transition}
      >
        <section>
          <Typical
            className="justify-content-center title outline text-center mx-auto pt-5"
            steps={["About", 4000]}
            loop={1}
            wrapper="h1"
          />
          <hr />
          <p className="caption text-center">Me, Myself, and I</p>
          <div className="container-fluid pt-4">
            <div className="row pt-5 pb-5">
              <div className="about-img col-xl-5 d-flex flex-column align-items-center my-auto">
                <Slide left>
                  <img
                    rel="preload"
                    as="image"
                    src={headshot}
                    alt="JLee Headshot"
                    fluid="true"
                    width="447px"
                    height="447px"
                  />
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
                      I am a self-taught <u>Junior Full Stack Developer</u>{" "}
                      based in the the SF Bay Area. I build scalable, efficent
                      and user-friendly web applications.
                    </p>
                    <p className="text-center mt-3 mb-3">
                      I have a background in pharmaceuticals and spent 10 years
                      working with patients in various outpatient pharmacies.
                      Albeit gratifying and enjoyable, new aspirations blossomed
                      and inspired me to leave my comfort zone. Web development
                      has given me the ability to be creative while building
                      with code, tests my analytical and problem-solving skills
                      and most importantly, contribute to the future of tech.
                    </p>
                    <p className="text-center mb-2">
                      I have 2+ years of experience working with JavaScript, JS
                      frameworks (React, Angular, Vue) and backend technologies
                      such as node/express, mongoDB and graphQL. I love to learn
                      and explore new technologies to challenge myself to become
                      a better developer.
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
          </div>
        </section>
      </motion.div>
    );
  }
}
