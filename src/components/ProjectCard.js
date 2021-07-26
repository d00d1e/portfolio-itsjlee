import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

import img from "../assets/img/featured32.svg";

export default function ProjectCard({ projects }) {
  const filters = ["all", "JS", "React", "MERN", "API", "PWA"];
  const [filter, setFilter] = useState("all");

  // This will filter projects based on Category
  const filteredProjects = projects.filter((project) =>
    project.category.includes(filter)
  );

  return (
    <section id="project-card">
      <div
        id="project-card-filters"
        className="d-flex flex-row align-items-center w-25 pb-3 pt-4"
      >
        {filters.map((filter) => (
          <button
            className="filter-buttons text-uppercase mx-auto p-3 mr-3"
            key={filter}
            onClick={() => setFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProjects.map((project) => {
          return (
            <Zoom key={project._id + filter}>
              <ul className="col-md-6 col-xl-4">
                <li className="card-list">
                  <div className="card">
                    {project.featured && (
                      <img className="featured" src={img} alt="featured" />
                    )}
                    <Link to={`/projects/${project._id}`}>
                      <img
                        rel="preload"
                        as="image"
                        src={
                          require(`../assets/img/projects/${project.imageUrl}`)
                            .default
                        }
                        alt={project.title}
                        className="card-img-top"
                        width="384px"
                        height="225px"
                      />
                    </Link>
                    <div className="card-body m-0 pt-2">
                      <div>
                        <p className="card-title text-uppercase h5 m-0">
                          {project.title}
                        </p>
                        <p className="text-muted h6 m-0">{project.caption}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Zoom>
          );
        })}
      </div>
    </section>
  );
}
