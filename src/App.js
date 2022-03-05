import React, { Component } from "react";
import ReactGA from 'react-ga';

import { ThemeContext } from "./contexts/themeContext";
import { googleAnalyticsUA } from "./utils/scripts"

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";

import './styles/global.css';

import { ReactComponent as ArrowDarkSVG } from './assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from './assets/arrow-light.svg';

class App extends Component {
  setGA = () => {
    ReactGA.initialize(googleAnalyticsUA);
    ReactGA.pageview('Init page view');
  };

  componentDidMount(){
    this.setGA();
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
    <div className={'App ' + theme}>
      <Header theme={theme}/>
        
      <div className={'content ' + theme}>
        <SocialSection theme={theme}/>
        <EmailSection theme={theme}/>
        <a className={'scrolltotop ' + theme} href='#intro'><ArrowDarkSVG/><ArrowLightSVG/></a>
    
        <Intro theme={theme}/>
        <About theme={theme}/>
        <Experience theme={theme}/>
        <Work theme={theme}/>
        <Contact theme={theme}/>
            
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;