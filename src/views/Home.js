/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { NavLink } from "react-router-dom";
import { Slide, Bounce } from "react-reveal";
import Typical from "react-typical";

import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

// import Bubbles from "../components/Bubbles";

export default function Home() {
  return (
    <motion.div
      id="home"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      {/* <Bubbles /> */}
      <section>
        <div className="home-content my-auto">
          <Slide top>
            {/* <h2 className="smiley text-left">☺︎</h2> */}
            <h2 className="smiley text-left">Hi!</h2>
          </Slide>
          <Slide left>
            <h1 className="text-left">
              I'm <span className="p-2">Juliana.</span>
            </h1>
          </Slide>
          <Typical
            className="text-left text-muted text-uppercase mt-3"
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
            wrapper="p"
          />
          <Bounce bottom>
            <div className="mt-5">
              <NavLink to="/about">What I do</NavLink>
            </div>
          </Bounce>
        </div>
      </section>
    </motion.div>
  );
}
