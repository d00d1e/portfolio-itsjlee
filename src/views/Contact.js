import React, { useEffect, useState } from "react";
import { Bounce, Fade } from "react-reveal";
import Typical from "react-typical";
import emailjs from "emailjs-com";

import { motion } from "framer-motion";
import { pageVariants, transition } from "../assets/animations";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_portfolio",
        e.target,
        "user_koS8SBOLvsk4cPYVwf4Yp",
        setMessage("Your email has been sent!"),
        setShowMessage(true)
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }, [showMessage]);

  return (
    <motion.div
      id="contact"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      <section>
        <Typical
          className="text-center title outline mx-auto pt-5"
          steps={["Contact", 3000]}
          loop={1}
          wrapper="h1"
        />
        <hr />
        <p className="caption text-center">Let's work together!</p>
        {showMessage && (
          <p className="sent-message text-center pt-4">{message}</p>
        )}
        <div className="container-fluid pt-5">
          <form
            className="row contact-form mx-auto pt-5 pb-5"
            onSubmit={sendEmail}
          >
            <Fade top>
              <div className="container">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 ">
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea
                      rows="5"
                      cols="30"
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </Fade>
            <Bounce bottom>
              <button className="button text-uppercase mt-5" type="submit">
                Send
              </button>
            </Bounce>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
