import React, { Component, useState } from "react";
import ReactGA from 'react-ga';

import './styles/global.css';
import { ReactComponent as ArrowSVG } from './assets/arrow.svg';

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.dark);

class App extends Component {
  /*setGA = () => {
    ReactGA.initialize('UA-xxxxxx-xx');
    ReactGA.pageview('Init page view');
  };

  componentDidMount(){
    this.setGA();
  }*/

  render() {
    return (        
      <Application />
    );
  }
}

function Application() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Header/>
          
        <div className='content'>
          <SocialSection/>
          <EmailSection/>
          <a className='scrolltotop' href='#'><ArrowSVG/></a>
      
          <Intro/>
          <About/>
              
          {/* <Footer/> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;