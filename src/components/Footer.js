import React from "react";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom>
      <footer className="w-100 py-4">
        <div className="text-center">
          <p className="footer-text text-uppercase">&copy;2021 itsjlee</p>
        </div>
      </footer>
    </Fade>
  );
}
