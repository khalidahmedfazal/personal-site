import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

import { SectionHeading } from "./sectionHeading";

export default function Contact({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.contact_content > p', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500 });
        ScrollReveal().reveal('.contact_content_button_wrapper', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500 });
    }, []);
    
    return(
        <section className={"contact " + theme} id="contact">
            <SectionHeading theme={theme} heading="contact me" showSpan={false}/>

            <div className="contact_content">
                <p>
                    I'm currently looking for opportunities in web development, so if you feel like I'd make a good addition to your project or company, I'd be happy to have a chat with you!
                </p>
                
                <div className="contact_content_button_wrapper">
                    <a href="mailto:khalidahmedfazal01@gmail.com"><span>contact me</span></a>
                </div>
            </div>
        </section>
    );
}