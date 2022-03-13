import React, { Component } from "react";

import { ThemeContext } from "./contexts/themeContext";
import initCustomCursor from "./plugins/customCursor";

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";

import './styles/styles.css';

import { ReactComponent as ToTopSVG } from './assets/back-to-top.svg';

class App extends Component {
  componentDidMount() {
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    initCustomCursor(isTouch);
  }

  render() {
    return (        
      <Application />
    );
  }
}

const Application = () => {
  const {darkMode} = React.useContext(ThemeContext);
  const theme = darkMode ? 'dark' : 'light';

  return (
    <>
      {/* <canvas id="canvas" width="400" height="400"></canvas> */}

      <div className={'App ' + theme}>
        <div id="cursor-follower" className={theme}></div>
        <Header theme={theme}/>
          
        <div className={'content ' + theme}>
          <SocialSection theme={theme}/>
          <EmailSection theme={theme}/>
          <a className={'scrolltotop not-scrolled ' + theme} href='#intro'><ToTopSVG/></a>
      
          <Intro theme={theme}/>
          <About theme={theme}/>
          <Experience theme={theme}/>
          <Work theme={theme}/>
          <Contact theme={theme}/>
              
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
}

export default App;