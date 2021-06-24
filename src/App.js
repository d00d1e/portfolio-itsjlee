import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./views/Home";
import About from "./views/About";
import Portfolio from "./views/Portfolio";
import ProjectView from "./views/ProjectView";
import Contact from "./views/Contact";
import Page404 from "./views/Page404";

import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Portfolio} />
              <Route exact path="/projects/:id" component={ProjectView} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Page404} />
            </Switch>
          </AnimatePresence>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
