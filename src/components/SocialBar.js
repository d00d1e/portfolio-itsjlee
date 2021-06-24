import React from "react";
import { Slide } from "react-reveal";

import linkedin from "../assets/img/linkedin-logo.svg";
import github from "../assets/img/github-logo.svg";
import instagram from "../assets/img/instagram-logo.svg";
import email from "../assets/img/email-logo.svg";

export default function SocialBar() {
  return (
    <Slide right>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/juliana-lee/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on LinkedIn"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/d00d1e"
          target="_blank"
          rel="noopener noreferrer"
          title="Checkout my respositories on GitHub"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/moooose_/"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow Moose on Instagram"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="mailto:lee.julianay@gmail.com?subject=Lets%20Connect!"
          target="_blank"
          rel="noopener noreferrer"
          title="Email me!"
        >
          <img src={email} alt="email" />
        </a>
      </div>
    </Slide>
  );
}
