import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialBar from './components/SocialBar';
import Footer from './components/Footer';


function App() {
  return (
    // <Layout>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
      <SocialBar />
      <Footer />
      </>
    // </Layout>
  );
}

export default App;