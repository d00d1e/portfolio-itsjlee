import React from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

import img from "../assets/img/featured32.svg";

export default function ProjectCard({ projects }) {
  return (
    <section id="project-list">
      <Zoom cascade>
        <ul className="row">
          {projects.map((project) => {
            return (
              <div className="col-md-6 col-xl-4" key={project._id}>
                <li className="card-list">
                  <div className="card">
                    {project.featured && (
                      <img className="featured" src={img} alt="" />
                    )}
                    <Link to={`/projects/${project._id}`}>
                      <img
                        rel="preload"
                        as="image"
                        src={require(`../assets/img/projects/${project.imageUrl}`)}
                        alt={project.title}
                        className="card-img-top"
                      />
                    </Link>
                    <div className="card-body m-0 pt-2">
                      <div>
                        <h5 className="card-title text-uppercase m-0">
                          {project.title}
                        </h5>
                        <h6 className="text-muted m-0">{project.caption}</h6>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </Zoom>
    </section>
  );
}
