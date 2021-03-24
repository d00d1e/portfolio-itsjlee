import React from "react";
import { Fade, Bounce } from "react-reveal";
import Typical from "react-typical";

export default function Home() {
  return (
    <div className="bg">
      <section id="home">
        <div className="container my-auto">
          <Bounce left>
            <h2 className="text-left pl-5">Hi!</h2>
          </Bounce>
          <Fade>
            <h1 className="text-left pl-5">
              I'm <span className="p-1">Juliana.</span>
            </h1>
          </Fade>
          <p className="text-left text-muted pl-5 mt-3">
            <Typical
              className="text-uppercase"
              steps={[
                "Web Developer",
                3000,
                "Plant Enthusiast",
                2000,
                "Musician",
                2000,
                "Nerd Friend",
                1500,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>
      </section>
    </div>
  );
}
