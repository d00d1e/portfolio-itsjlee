import React, { useEffect, useState } from "react";
import Typical from "react-typical";
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

  const title = project.title;

  return (
    <section id="project-view">
      <div className="text-center">
        <Typical
          className="title outline pt-5"
          steps={[title, 4000]}
          loop={1}
          wrapper="h1"
        />
        <p className="caption">{project.caption}</p>
        <p className="pb-5">{project.date}</p>
      </div>
      <div className="project-view-container">
        <img
          className="boxshadow d-flex m-auto"
          src={require(`../assets/img/projects/${project.imageUrl}`)}
          alt={project.title}
        />
        <div className="project-view-description mx-auto p-5">
          <p className="text-center font-weight-bold">{project.stack}</p>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="project-view-buttons text-center pt-4 pb-5">
        <a
          href={project.github}
          className="text-uppercase"
          target="_blank"
          rel="noreferrer"
        >
          Code
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
