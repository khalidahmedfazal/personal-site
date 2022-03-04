import React, { Component } from "react";
import ReactGA from 'react-ga';

import './styles/global.css';
import { ReactComponent as ArrowDarkSVG } from './assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from './assets/arrow-light.svg';

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import SocialSection from "./components/socials-section";
import EmailSection from "./components/email-section";

import { ThemeContext } from "./contexts/themeContext";

class App extends Component {
  /*setGA = () => {
    ReactGA.initialize('UA-xxxxxx-xx');
    ReactGA.pageview('Init page view');
  };*/

  componentDidMount(){
    //this.setGA();
  }

  render() {
    return (        
      <Application />
    );
  }
}

function Application() {
  const {darkMode} = React.useContext(ThemeContext);
  const theme = darkMode ? 'dark' : 'light';

  return (
    <div className={'App ' + theme}>
      <Header theme={theme}/>
        
      <div className={'content ' + theme}>
        <SocialSection theme={theme}/>
        <EmailSection theme={theme}/>
        <a className={'scrolltotop ' + theme} href='#'><ArrowDarkSVG/><ArrowLightSVG/></a>
    
        <Intro theme={theme}/>
        <About theme={theme}/>
        <Experience theme={theme}/>
            
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;