import React, { Component, useEffect } from "react";

import $ from "jquery";

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
  render() {
    return (        
      <Application />
    );
  }
}

const Application = () => {
  const {darkMode} = React.useContext(ThemeContext);
  const theme = darkMode ? 'dark' : 'light';

  var isTouch;

  useEffect(() => {
    isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    initCustomCursor(isTouch);

    if(!isTouch) initPaper();
  }, []);

  useEffect(() => {
    $(".canvas-wrapper").removeClass().addClass(`canvas-wrapper ${theme}`);
  }, [theme]);

  const initPaper = () => {
    $(`.canvas-wrapper`).css({
      width: `${$("body").outerWidth()}px`,
      height: `${$("body").outerHeight()}px`
    });
    
    const trailColor = "rgba(255, 0, 128, .5)";

    const script = document.createElement('script');
    script.type = "text/paperscript";
    script.async = true;
    script.setAttribute("canvas", "canvas");
    script.innerHTML = `var points = 20;  var length = 35; var path = new Path({ strokeColor: '${trailColor}', strokeWidth: 7, strokeCap: 'round' }); var start = view.center / [10, 1]; for (var i = 0; i < points; i++) path.add(start + new Point(i * length, 0)); function onMouseMove(event) { path.firstSegment.point = event.point; for (var i = 0; i < points - 1; i++) { var segment = path.segments[i]; var nextSegment = segment.next; var vector = segment.point - nextSegment.point; vector.length = length; nextSegment.point = segment.point - vector; } path.smooth({ type: 'continuous' }); }`;
  
    document.body.appendChild(script);
  }

  if(!isTouch) {
    document.onmousemove = (e) => {
      if(!mouseWithin($("#canvas"), e.pageX, e.pageY)) {
        $(`#canvas`).css({
          opacity: `0`
        });
      }
      else{
        $(`#canvas`).css({
          opacity: `1`
        });
      }
    }
  }

  const mouseWithin = (bounds, x, y) => {
    var offset = bounds.offset();
    var l = offset.left;
    var t = offset.top;
    var h = bounds.height();
    var w = bounds.width();

    var maxx = l + w;
    var maxy = t + h;

    return (y < maxy && y > t) && (x < maxx && x >= l);
  };

  return (
    <>
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