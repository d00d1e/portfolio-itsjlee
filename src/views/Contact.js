import React, { useEffect, useState } from "react";
import { Bounce, Slide } from "react-reveal";
import Typical from "react-typical";
import emailjs from "emailjs-com";

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
    <section id="contact">
      <Typical
        className="text-center title outline mx-auto pt-5"
        steps={["Contact", 3000]}
        loop={1}
        wrapper="h1"
      />
      <p className="caption text-center">Let's work together!</p>
      <div className="container-fluid contact-container my-auto">
        {showMessage && (
          <p className="sent-message text-center fixed">{message}</p>
        )}
        <form className="row contact-form mx-auto" onSubmit={sendEmail}>
          <Slide left>
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
          </Slide>
          <Slide right>
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
          </Slide>
          <Bounce bottom>
            <button className="button text-uppercase mt-5" type="submit">
              Send
            </button>
          </Bounce>
        </form>
      </div>
    </section>
  );
}
