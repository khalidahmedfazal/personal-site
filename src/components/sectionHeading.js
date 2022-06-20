import React, { useEffect } from 'react'

import $ from "jquery";

import { vh } from "../helpers/viewportHelper";
import { jumbleLetters } from '../helpers/letterJumbleHelper';

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
        jumbleLetters("//" + heading, 42.5, `.section_heading.${heading.replace(/ /g,"_")}_heading > h1 > span`, true);

        if(!$(`.section_heading.${heading.replace(/ /g,"_")}_heading > div`).hasClass('animated')) $(`.section_heading.${heading.replace(/ /g,"_")}_heading > div`).addClass('animated')
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
