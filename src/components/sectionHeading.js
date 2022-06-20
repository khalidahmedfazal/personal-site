import React, { useEffect } from 'react'

import $ from "jquery";

import { vh } from "../helpers/viewportHelper";

export const SectionHeading = ({theme, heading, showSpan = true}) => {
  var span;
  if(showSpan) span = <div><span></span></div>

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

    const handleScroll = () => {
      var scrollAmount = window.pageYOffset;
      var contentOffset = $(`.section_heading.${heading.replace(/ /g,"_")}_heading`).offset().top;

      if((scrollAmount + (vh)) >= contentOffset) {
        var theLetters = "abcdefghijklmnopqrstuvwxyz"; //You can customize what letters it will cycle through
        var ctnt = "//" + heading; // Your text goes here
        var speed = 42.5; // ms per frame
        var increment = 3; // frames per step. Must be >2
            
        var clen = ctnt.length;       
        var si = 0;
        var stri = 0;
        var block = "";
        var fixed = "";
        
        if(!$(`.section_heading.${heading.replace(/ /g,"_")}_heading > h1 > span`).hasClass("animated")) {
          (function rustle(i) {          
            setTimeout(function () {
                if (--i) { rustle(i); }
                nextFrame(i);
                si = si + 1;        
            }, speed);

            $(`.section_heading.${heading.replace(/ /g,"_")}_heading > h1 > span`).addClass("animated");
          })(clen*increment+1);
        }
    
        function nextFrame(pos){
            for (var i=0; i<clen-stri; i++) {
              //Random number
              var num = Math.floor(theLetters.length * Math.random());
              //Get random letter
              var letter = theLetters.charAt(num);
              block = block + letter;
            }
    
            if (si == (increment-1)){
              stri++;
            }
    
            if (si == increment){
            fixed = fixed +  ctnt.charAt(stri - 1);
            si = 0;
            }
            
            $(`.section_heading.${heading.replace(/ /g,"_")}_heading > h1 > span`).html(fixed + block);
            block = "";
        }

        if(!$(`.section_heading.${heading.replace(/ /g,"_")}_heading > div`).hasClass('animated')) $(`.section_heading.${heading.replace(/ /g,"_")}_heading > div`).addClass('animated')
        //$(`.section_heading.${heading.replace(/ /g,"_")}_heading > div`).css({ animation: '1s grow-width forwards' });
      }
    }

  return (
    <div className={"section_heading " + heading.replace(/ /g,"_") + "_heading " + theme}>
        <h1>{/* //{heading}<span>//{heading}</span> */}
          <span></span>
          <span></span>
        </h1>
        
        {span}
    </div>
  )
}
