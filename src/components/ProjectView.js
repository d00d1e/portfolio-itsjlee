import React, { useEffect, useState } from "react";
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
    <section id="project-view">
      <div className="text-center pt-5">
        <h1 className="pt-4">{project.title}</h1>
        <p>{project.caption}</p>
      </div>
      <div className="project-view-container">
        <img
          src={require("../assets/img/projects/" + project.imageUrl).default}
          // src={project.imageUrl}
          alt={project.title}
        />
        {/* <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title={project.title}
            className="embed-responsive-item"
            src={project.link}
            aria-hidden="true"
          ></iframe>
        </div> */}
        <div className="pt-5">
          <p>{project.stack}</p>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-view-buttons text-center">
        <a
          href={project.github}
          className="text-uppercase pr-5"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
        <a
          href={project.link}
          className="text-uppercase"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    </section>
  );
}
