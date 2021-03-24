import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
// import CategoryNav from "./CategoryNav";
import data from "../projects";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: data.projects,
    };
  }

  render() {
    return (
      <section id="projects">
        {/* <CategoryNav /> */}
        <div className="container-fluid">
          <div className="row">
            <ProjectCard projects={this.state.projects} />
          </div>
        </div>
      </section>
    );
  }
}
