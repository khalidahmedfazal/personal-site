import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, createPath } from 'react-router-dom';

import $ from "jquery";
import Paper from "paper";

import { ThemeContext } from "./contexts/themeContext";
import initCustomCursor from "./plugins/customCursor";

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

  const [ isPaperInit, setIsPaperInit ] = useState(false);

  const theme = darkMode ? 'dark' : 'light';
  const vh = window.innerHeight;
  var path, isTouch;

  useEffect(() => {
    isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    initCustomCursor(isTouch);

    /*$(window).on("load", () => {
    });
    $(`.canvas-wrapper`).css({
      width: `${$(".content").outerWidth()}px`,
      height: `${$(".content").outerHeight()}px`
    });*/
  }, []);

  useEffect(() => {
    //Update class depending on theme
    $(".canvas-wrapper").removeClass().addClass(`canvas-wrapper ${theme}`);

    if(isPaperInit) clearPaperCanvas();

    if(!isTouch) initPaper();
  });
  //}, [theme]);

  /*useEffect(() => {
  }, [path]);*/

  const initPaper = () => {
    //Stroke color depending on theme
    const strokeColor = theme === "dark" ? "rgba(255, 128, 59, .5)" : "rgba(136, 0, 255, .75)";

    /*$(`.canvas-wrapper`).css({
      width: `${$(".content").outerWidth()}px`,
      height: `${$(".content").outerHeight()}px`
    });*/

    Paper.setup("canvas");

    var strokeWidthVh = 0.46; //5px in vh(1080)
    var strokeWidthPx = (strokeWidthVh * vh) / 100; //px equivalent of vw

    var path = new Paper.Path({
      strokeColor: strokeColor,
      strokeWidth: strokeWidthPx,
      strokeCap: 'round'
    });

    createPath(path);
    setIsPaperInit(true);
  }

  const createPath = (path) => {
    if(path !== null) {
      Paper.project.activeLayer.addChild(path); //Add path to layer

      var points = 20;
      var length = 7.5;

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
    <div className="canvas-wrapper">
      <canvas id="canvas">
      </canvas>
    </div>
  
    <div className={'App ' + theme}>
      <div id="cursor-follower" className={theme}></div>

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