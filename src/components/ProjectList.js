import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
// import CategoryNav from "./CategoryNav";
import data from "../projects";

export default class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      projects: data.projects,
    };
  }

  render() {
    return (
      <section id="project-list">
        {/* <CategoryNav /> */}
        <div className="container-fluid">
          <div className="row pt-4">
            <ProjectCard projects={this.state.projects} />
          </div>
        </div>
      </section>
    );
  }
}
