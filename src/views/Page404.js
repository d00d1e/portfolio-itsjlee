import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

export default function Page404() {
  return (
    <motion.div
      id="page404"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      <section className="page404 container my-auto text-center">
        <h1>404</h1>
        <h4 className="p-2">Oops! Page Not Found.</h4>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed, or is temporarily unavailable
        </p>
        <Link to="/" className="button text-uppercase mt-4">
          Home
        </Link>
      </section>
    </motion.div>
  );
}
