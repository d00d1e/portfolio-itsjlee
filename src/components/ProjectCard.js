import React, { Component } from 'react';
import { Fade, Zoom } from 'react-reveal';
import Modal from 'react-modal';


export default class ProjectCard extends Component  {
  constructor(props){
    super(props);
    this.state ={
      isOpen: false,
      activeProject: ''
    }
    this.windowOffset = 0
  }

  openModal = (project) => {
    this.setState({ isOpen: true, activeProject: project }, () => {
      this.windowOffset = window.scrollY;
      document.body.setAttribute('style', `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0;`);
    });
  }

  closeModal = () => {
    this.setState({ isOpen: false }, () => {
      document.body.setAttribute('style', '');
      window.scrollTo(0, this.windowOffset);
    });
  }

  render() {
    const { projects } = this.props;

    return (
      <>
      <Zoom cascade>
        <ul className="row p-5">
          {projects.map((project) => {
            return(
              <div className="col-md-6 col-lg-6 col-xl-4" key={project._id} >
                <li className="card-list">
                  <div className="card">
                    <a href={"#" + project._id} onClick={() => this.openModal(project)}>
                      <img src={require('../assets/img/projects/' + project.imageUrl).default} alt={project.title} className="card-img-top" />
                    </a>
                    <div className="card-body m-0 pt-2">
                      <h5 className="card-title text-uppercase m-0">{project.title}</h5>
                      <h6 className="text-muted m-0">{project.caption}</h6>
                    </div>
                  </div>
                </li>
              </div>
            )
          })}

          <Zoom>
            <Modal
              isOpen={this.state.isOpen}
              onRequestClose={this.closeModal}
              preventScroll={true}
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                },
                content: {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  right: '30%',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                }
              }}
            >
              <div className="project-details">
                <div className="d-flex ml-auto">
                  <button className="modal-button p-1 text-uppercase" onClick={() => this.closeModal()}>X</button>
                </div>
                <Fade>
                  <div className="embed-responsive embed-responsive-21by9">
                    <iframe
                      title={this.state.activeProject.title}
                      className="embed-responsive-item"
                      src={this.state.activeProject.link}
                      aria-hidden="true"
                    ></iframe>
                  </div>
                </Fade>
                <div className="project-details-description">
                  <h4 className="text-center mt-5 text-uppercase">{this.state.activeProject.title}</h4>
                  <h6 className="text-center text-muted">{this.state.activeProject.caption}</h6>
                  <hr/>
                  <p className="text-center p-2">{this.state.activeProject.description}</p>
                  <div className="d-flex justify-content-around">
                    <p>Stack: {this.state.activeProject.stack} </p>
                    <p className="text-center">
                      <a className="text-uppercase" href={this.state.activeProject.github}>/View Code</a>
                    </p>
                    <p className="text-center">
                      <a className="text-uppercase" href={this.state.activeProject.link} target="_blank" rel="noreferrer">/View Full Page</a>
                    </p>
                  </div>

                </div>
              </div>
            </Modal>
          </Zoom>

        </ul>
      </Zoom>
      </>
    )
  }
}

