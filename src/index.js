import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/css/index.css";
import "./assets/css/animation.css";

document.addEventListener("DOMContentLoaded", (e) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
});
