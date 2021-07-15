import React from "react";
import { Slide } from "react-reveal";

import linkedin from "../assets/img/linkedin-logo.svg";
import github from "../assets/img/github-logo.svg";
import instagram from "../assets/img/instagram-logo.svg";
import email from "../assets/img/email-logo.svg";
import download from "../assets/img/download-logo.svg";

import resume from "../assets/resume/resume-webdev-JLee.pdf";

export default function SocialBar() {
  return (
    <Slide right>
      <div className="social-media">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          data-toggle="tooltip"
          data-placement="left"
          title="Download my resumé"
        >
          <img src={download} alt="resume" />
        </a>
        {/* <a
          href="https://www.instagram.com/moooose_/"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Moose on Instagram"
        >
          <img src={instagram} alt="instagram" />
        </a> */}
        <a
          href="https://github.com/d00d1e"
          target="_blank"
          rel="noopener noreferrer"
          title="View my GitHub repositories"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/juliana-lee/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on LinkedIn"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="mailto:lee.julianay@gmail.com?subject=Lets%20Connect!"
          target="_blank"
          rel="noopener noreferrer"
          title="Send me an Email"
        >
          <img src={email} alt="email" />
        </a>
      </div>
    </Slide>
  );
}
