import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import { Slide } from "react-reveal";

import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

import data from "../projects";

export default function ProjectView(props) {
  const { id } = props.match.params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const proj = data.projects.find((x) => x._id === id);
    setProject(proj);
  }, [id]);

  if (!project) {
    return null;
  }

  return (
    <motion.div
      id="project-view"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      <section>
        <Link className="back-link text-uppercase pt-3 pb-3" to="/projects">
          <i className="fas fa-chevron-left"></i> Back
        </Link>
        <hr />
        <div className="container-fluid row m-auto pt-5">
          <Slide left>
            <div className="project-view-overview col-md-6 p-2">
              <Typical
                className="title"
                steps={[project.title, 4000]}
                loop={1}
                wrapper="h2"
              />
              <p className="h5 pb-5">{project.caption}</p>
              <p className="project-view-date text-right">{project.date}</p>
              <img
                className="boxshadow w-100"
                src={
                  require(`../assets/img/projects/${project.imageUrl}`).default
                }
                alt={project.title}
                width="582px"
                height="332px"
              />
              <div className="project-view-buttons text-uppercase pt-4 pb-5">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <i className="fas fa-desktop"></i> Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
              </div>
              <p className="project-view-description pb-5">
                {project.description}
              </p>
              <h3 className="title">Technologies Used</h3>
              <ul className="stack-list pl-4">
                {project.stack.map((i, index) => (
                  <li key={project._id + index}>{i}</li>
                ))}
              </ul>
            </div>
          </Slide>

          <Slide right>
            <div className="project-view-contents col-md-6 p-2 pl-4 pt-5">
              {project.contents.map((content, i) => (
                <div key={i}>
                  <h4 className="title">{content.title}</h4>
                  <p className="pb-5">{content.description}</p>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </section>
    </motion.div>
  );
}
