import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
import Modal from "react-modal";
import Typical from "react-typical";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeProject: "",
    };
    this.windowOffset = 0;
  }

  openModal = (project) => {
    this.setState({ isOpen: true, activeProject: project }, () => {
      this.windowOffset = window.scrollY;
      document.body.setAttribute(
        "style",
        `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0;`
      );
    });
  };

  closeModal = () => {
    this.setState({ isOpen: false }, () => {
      document.body.setAttribute("style", "");
      window.scrollTo(0, this.windowOffset);
    });
  };

  render() {
    const { projects } = this.props;

    return (
      <section id="project-list">
        <h1 className="text-center outline pt-5 pb-5">
          <Typical
            className="mb-0"
            steps={["Portfolio", 4000]}
            loop={1}
            wrapper="p"
          />
        </h1>
        <Zoom cascade>
          <ul className="row p-3">
            {projects.map((project) => {
              return (
                <div className="col-md-6 col-lg-6 col-xl-4" key={project._id}>
                  <li className="card-list">
                    <div className="card">
                      <Link
                        to={`/projects/${project._id}`}
                        // href={"#" + project._id}
                        // onClick={() => this.openModal(project)}
                      >
                        <img
                          rel="preload"
                          as="image"
                          src={
                            require("../assets/img/projects/" +
                              project.imageUrl).default
                          }
                          alt={project.title}
                          className="card-img-top"
                        />
                      </Link>
                      <div className="card-body m-0 pt-2">
                        <h5 className="card-title text-uppercase m-0">
                          {project.title}
                        </h5>
                        <h6 className="text-muted m-0">{project.caption}</h6>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}

            {/* <Zoom top>
              <Modal
                isOpen={this.state.isOpen}
                onRequestClose={this.closeModal}
                preventScroll={true}
                ariaHideApp={false}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  },
                  content: {
                    top: "50%",
                    left: "50%",
                    right: "32.5%",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    maxheight: "100%",
                    padding: ".4rem 1rem",
                  },
                }}
              >
                <div className="project-details">
                  <div className="d-flex ml-auto">
                    <button
                      className="modal-button p-1 text-uppercase"
                      onClick={() => this.closeModal()}
                    >
                      X
                    </button>
                  </div>
                  <Fade>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        title={this.state.activeProject.title}
                        className="embed-responsive-item"
                        src={this.state.activeProject.link}
                        aria-hidden="true"
                      ></iframe>
                    </div>
                  </Fade>
                  <div className="project-details-description">
                    <h4 className="text-center mt-4 text-uppercase">
                      {this.state.activeProject.title}
                    </h4>
                    <h6 className="text-center text-muted">
                      {this.state.activeProject.caption}
                    </h6>
                    <hr />
                    <p className="text-center p-2">
                      {this.state.activeProject.description}
                    </p>
                    <div className="d-flex justify-content-around">
                      <p>{this.state.activeProject.stack} </p>
                      <p className="text-center">
                        <a
                          className="text-uppercase"
                          href={this.state.activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Code
                        </a>
                      </p>
                      <p className="text-center">
                        <a
                          className="text-uppercase"
                          href={this.state.activeProject.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Modal>
            </Zoom> */}
          </ul>
        </Zoom>
      </section>
    );
  }
}
