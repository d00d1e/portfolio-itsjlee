import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

import ProjectCard from "../components/ProjectCard";
import data from "../projects";

export default function Portfolio() {
  return (
    <motion.div
      id="portfolio"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      <section>
        <Typical
          className="text-center title outline mx-auto pt-5"
          steps={["Portfolio", 4000]}
          loop={1}
          wrapper="h1"
        />
        <hr />
        <p className="caption text-center">My recent work</p>
        <div className="container-fluid">
          <div className="row">
            <ProjectCard projects={data.projects} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
