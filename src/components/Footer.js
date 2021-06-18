import React from "react";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom>
      <footer className="container-fluid footer mx-auto my-auto">
        <div className="text-center">
          <p className="footer-text">&copy;2021 itsjlee</p>
        </div>
      </footer>
    </Fade>
  );
}
