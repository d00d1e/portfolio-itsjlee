import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
import ProjectView from "./components/ProjectView";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectView} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      <SocialBar />
      <Footer />
    </Layout>
  );
}

export default App;
