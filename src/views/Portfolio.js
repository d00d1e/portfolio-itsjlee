import React from "react";
import Typical from "react-typical";
import ProjectCard from "../components/ProjectCard";
// import CategoryNav from "./CategoryNav";

import data from "../projects";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <section>
        <Typical
          className="text-center title outline mx-auto pt-5"
          steps={["Portfolio", 4000]}
          loop={1}
          wrapper="h1"
        />
        <p className="caption text-center">My recent work</p>
        {/* <CategoryNav /> */}

        <div className="container-fluid">
          <div className="row">
            <ProjectCard projects={data.projects} />
          </div>
        </div>
      </section>
    </div>
  );
}
