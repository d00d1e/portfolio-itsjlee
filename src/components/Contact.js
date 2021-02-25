import React from "react";
import Fade from "react-reveal";
import Typical from "react-typical";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_portfolio",
        e.target,
        "user_koS8SBOLvsk4cPYVwf4Yp"
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
  }

  return (
    <section id="contact">
      <div className="container-fluid outline my-auto">
        <h1 className="mb-5">
          <Typical
            className="text-center mb-5"
            steps={["Let's connect! ☺︎", 3000]}
            loop={1}
          />
        </h1>
        <form className="row contact-form mx-auto my-auto" onSubmit={sendEmail}>
          <Fade>
            <div className="col-md-12">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control boxshadow"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="mb-3">
                <input
                  type="text"
                  name="company"
                  className="form-control boxshadow"
                  placeholder="Company"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control boxshadow"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <textarea
                  rows="4"
                  cols="30"
                  name="message"
                  className="form-control boxshadow"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <button className="text-uppercase mt-5" type="submit">
              Send{" "}
            </button>
          </Fade>
        </form>
      </div>
    </section>
  );
}
