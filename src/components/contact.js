import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

import { SectionHeading } from "./sectionHeading";

export default function Contact({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.contact > .section_heading', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.contact_content > p', { scale: 1.5, duration: 2500, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.contact_content_button_wrapper', { scale: 1.5, duration: 3000, easing: 'ease', mobile: false });
    }, []);
    
    return(
        <section className={"contact " + theme} id="contact">
            <SectionHeading theme={theme} heading="get in touch with me" showSpan={false}/>

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