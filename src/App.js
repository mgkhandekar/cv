import React, { Component } from 'react';
import './App.css';
import './main.css';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Extra from './components/Extra';
import Education from './components/Education';
import Language from './components/Language';
import Skills from './components/Skills';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div >
        <div className="background-color-layer"  />
        <main className="content-wrapper">
          <header className="white-text-container section-container">
            <div className="text-center">
              <h1>I am Manasi Khandekar</h1>
              <p>Front-end Developer | Design Enthusiast</p>
              <p>
                <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/manasi-khandekar-627772187" title>
                  <i className="fa fa-linkedin" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://github.com/mgkhandekar" title>
                  <i className="fa fa-github" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://www.instagram.com/libe_writer/" title>
                  <i className="fa fa-instagram" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/profile.php?id=100009451654660" title>
                  <i className="fa fa-facebook" />
                </a>
              </p>
            </div>
          </header>
        </main>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <About/>
            <Experience/>
            <Project/>
             <Extra/>
            <Education/>
            <Skills/>
             <Language/>
              <Contact/>
            </div>
          </div>
        </div>
        <footer className="footer-container white-text-container text-center">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p><img src="./assets/images/mashup-icon.svg" alt="" /></p>
                <p>©All rights reserved.</p>
                <p>
                  <a className="fa-icon fa-icon-2x" href="https://www.linkedin.com/in/manasi-khandekar-627772187" title>
                  <i className="fa fa-linkedin" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://github.com/mgkhandekar" title>
                  <i className="fa fa-github" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://www.instagram.com/libe_writer/" title>
                  <i className="fa fa-instagram" />
                </a>
                <a className="fa-icon fa-icon-2x" href="https://www.facebook.com/profile.php?id=100009451654660" title>
                  <i className="fa fa-facebook" />
                </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
