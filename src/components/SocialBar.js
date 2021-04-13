import React, { Component } from "react";
import { Fade } from "react-reveal";
import resume from "../assets/resume/resume-webdev-JLee.pdf";

export default class SocialBar extends Component {
  // function = () => {
  //   '[data-toggle="tooltip"]'.tooltip({
  //     container: ".social-media",
  //   });
  // };

  render() {
    return (
      <Fade right>
        <div className="social-media">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="left"
            title="Resume"
          >
            <i className="fas fa-download"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juliana-lee/"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="left"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/d00d1e"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="left"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:lee.julianay@gmail.com?subject=Lets%20Connect!"
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="tooltip"
            data-placement="left"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </Fade>
    );
  }
}
