import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import $ from "jquery";

import { ThemeContext } from "./contexts/themeContext";

import NotFound from './components/notFound';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import SocialSection from "./components/socialsSection";
import EmailSection from "./components/emailSection";
import Footer from './components/footer';

import { CustomCursor, initCustomCursor, attachGlobalHoverEffect } from "./helpers/customCursorHelper";
//import { initPaper, clearPaperCanvas } from "./helpers/canvasHelper";
import { vh, vw, isTouch, isMobile, mobileVw } from "./helpers/viewportHelper";

import './styles/styles.css';

import { ReactComponent as ToTopSVG } from './assets/back-to-top.svg';

class App extends Component {
  render() {
    return (        
      <Application />
    );
  }
}

const Application = () => {
  const {darkMode} = React.useContext(ThemeContext);

  //const [ isPaperInit, setIsPaperInit ] = useState(false);

  const theme = darkMode ? 'dark' : 'light';

  useEffect(() => {
    initCustomCursor(isTouch);
    attachGlobalHoverEffect();
  }, []);

  /*useEffect(() => {
    if(isPaperInit) clearPaperCanvas();

    if(!isTouch) {
      initPaper(theme); 
      setIsPaperInit(true);
    }
  }, [theme]);*/
  
  /*const mouseWithin = (bounds, x, y) => {
    var offset = bounds.offset();
    var l = offset.left;
    var t = offset.top;
    var h = bounds.height();
    var w = bounds.width();

    var maxx = l + w;
    var maxy = t + h;

    return (y < maxy && y > t) && (x < maxx && x >= l);
  };

  document.onmousemove = (e) => {
    if(!isTouch) {
      if(!mouseWithin($("#canvas"), e.pageX, e.pageY)) {
        //Hide canvas if mouse is out of bounds of canvas
        $(`#canvas`).css({
          opacity: `0`
        });
      }
      else{
        //Show canvas if mouse is within bounds of canvas
        $(`#canvas`).css({
          opacity: `1`
        });
  
        //Hide canvas if mouse is not moved for >= 500ms
        setTimeout(() => {
          $(`#canvas`).css({
            opacity: `0`
          });
        }, 500);
      }
    }
  }*/

  return (
    <>
    {/* <div className="canvas-wrapper">
      <canvas id="canvas">
      </canvas>
    </div> */}
  
    <div className={'App ' + theme}>
      <CustomCursor theme={theme} isTouch={isTouch} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content theme={theme} />} />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

const Content = (props) => {
  return(
    <>
      <Header theme={props.theme} />
        
      <div className={'content ' + props.theme}>
        <SocialSection theme={props.theme}/>
        <EmailSection theme={props.theme}/>
        <a className={'scrolltotop not-scrolled ' + props.theme} href='#intro'><ToTopSVG/></a>

        <Intro theme={props.theme}/>
        <About theme={props.theme}/>
        <Experience theme={props.theme}/>
        <Projects theme={props.theme}/>
        <Contact theme={props.theme}/>
      </div>
              
      <Footer theme={props.theme}/>
    </>
  );
}

export default App;