import React from 'react';
import { Fade } from 'react-reveal';
import Typical from 'react-typical';


export default function Home() {
  return (
    <div className="bg">
    <section id="home">
      <Fade>
        <div className="container-fluid my-auto">
          <h1 className="text-left outline pl-5">Hi!</h1>
          <h1 className="text-left pl-5">I'm <span className="p-1">Juliana.</span></h1>
          <p className="text-left text-muted pl-5 mt-2">&nbsp;↳
            <Typical
              className="text-uppercase outline"
              steps={['Web Developer', 2000, 'Plant Enthusiast', 1500, 'Musician', 1500, 'Nerd Friend', 1500]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>
      </Fade>
    </section>
    </div>

  )
}
