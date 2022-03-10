import React, { Component } from "react";

import { ThemeContext } from "./contexts/themeContext";

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";

import './styles/styles.css';

import { ReactComponent as ArrowDarkSVG } from './assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from './assets/arrow-light.svg';

class App extends Component {
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