import React, { Component } from 'react';
import { Fade } from 'react-reveal';

export default class SocialBar extends Component {
  render() {
    return (
      <Fade right>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/juliana-lee/" target="_blank" rel="noopener noreferrer">/<i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/d00d1e" target="_blank" rel="noopener noreferrer">/<i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/moooose_/" target="_blank" rel="noopener noreferrer">/<i className="fab fa-instagram"></i></a>
          <a href="mailto:lee.julianay@gmail.com?subject=Lets%20Connect!" target="_blank" rel="noopener noreferrer">/<i className="fas fa-envelope"></i></a>
        </div>
      </Fade>
    )
  }
}
