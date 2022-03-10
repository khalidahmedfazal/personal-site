import React from 'react'

export const SectionHeading = ({theme, heading}) => {
  return (
    <div className={"section_heading " + theme}>
        <h1>//{heading}<span>//{heading}</span></h1>
        
        <div>
            <span></span>
        </div>
    </div>
  )
}
