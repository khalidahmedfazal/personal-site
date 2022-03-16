import React from 'react'

export const SectionHeading = ({theme, heading, showSpan = true}) => {
  var span;
  if(showSpan) span = <div><span></span></div>

  return (
    <div className={"section_heading " + theme}>
        <h1>//{heading}<span>//{heading}</span></h1>
        
        {span}
    </div>
  )
}
