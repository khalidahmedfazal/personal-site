import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

export default function Contact({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.contact > .section_heading', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.contact_content > p', { scale: 1.5, duration: 2500, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.contact_content_button_wrapper', { scale: 1.5, duration: 3000, easing: 'ease', mobile: false });
    }, []);
    
    return(
        <div className={'content ' + theme}>
            <section className={"not-found " + theme} id="not-found">
                <h1>404</h1>
                <h2>Looks like you took a stroll into the unknown</h2>
                <a href="/">go back</a>
            </section>
        </div>
    );
}