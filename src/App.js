import React, { Component, useEffect, useState } from "react";

import $ from "jquery";
import Paper from "paper";

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
  const [ path, setPath ] = useState(null);

  const theme = darkMode ? 'dark' : 'light';

  var isTouch;

  useEffect(() => {
    isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    initCustomCursor(isTouch);
  }, []);

  useEffect(() => {
    //Update class depending on theme
    $(".canvas-wrapper").removeClass().addClass(`canvas-wrapper ${theme}`);

    clearPaperCanvas();

    if(!isTouch) initPaper();
  }, [theme]);

  useEffect(() => {
    if(path !== null) {
      Paper.project.activeLayer.addChild(path); //Add path to layer

      var points = 20;
      var length = 10;

      var start = Paper.view.center / [10, 1];

      for (var i = 0; i < points; i++)
        path.add(start + new Paper.Point(i * length, 0));

      Paper.view.onMouseMove = (event) => {
        path.firstSegment.point = event.point;

        for (var i = 0; i < points - 1; i++) {
          var segment = path.segments[i];
          var nextSegment = segment.next;
          var vector = segment.point.subtract(nextSegment.point);
          vector.length = length;
          nextSegment.point.set(segment.point.subtract(vector));
        }

        path.smooth({ type: 'continuous' });
      };
    }
  }, [path]);

  const initPaper = () => {
    //Stroke color depending on theme
    const strokeColor = theme === "dark" ? "rgba(255, 128, 59, .5)" : "rgba(136, 0, 255, .75)";

    $(`.canvas-wrapper`).css({
      width: `${$("body").outerWidth()}px`,
      height: `${$("body").outerHeight()}px`
    });

    Paper.setup("canvas");

    setPath(new Paper.Path({
      strokeColor: strokeColor,
      strokeWidth: 7,
      strokeCap: 'round'
    }));
  }

  const clearPaperCanvas = () => {
    if(Paper.project != null) Paper.project.remove();
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
  }

  return (
    <>
      <div class="canvas-wrapper">
        <canvas id="canvas">
        </canvas>
      </div>
    
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