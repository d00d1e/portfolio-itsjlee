import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function Page404() {
  return (
    <Fade>
      <section id="not-found" className="container my-auto text-center">
        <h1>
          4<span>☹︎</span>4
        </h1>
        <h4>Oops! Page Not Found.</h4>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, or is temporarily unavailable
        </p>
        <Link to="/" className="button text-uppercase mt-4">
          Home
        </Link>
      </section>
    </Fade>
  );
}
