import React, { Component }from 'react';
import ProjectCard from './ProjectCard';
import data from '../projects';


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: data.projects
    }
  }

  render() {
    return (
      <section id="projects">
        <div className="container-fluid">
          <div className="row pt-4 pb-4">
            <ProjectCard projects={this.state.projects} />
          </div>
        </div>
      </section>
    )
  };
}
