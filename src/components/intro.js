import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

import { ReactComponent as ArrowDarkSVG } from '../assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from '../assets/arrow-light.svg';

export default function Intro({theme}) {
    useEffect(() => {
        ScrollReveal().reveal('.intro > h3', { scale: 1.5, duration: 1000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.intro_name', { scale: 1.5, duration: 1500, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.intro > h2', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.intro > p', { scale: 1.5, duration: 2500, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.content_navigator', { scale: 1.5, duration: 3000, easing: 'ease', mobile: false });
    }, []);

    return(
        <section className={"intro " + theme} id="intro">
            <h3>Hey there, I'm</h3>
            {/* <div className="intro_top">
                <div>
                    <h3>Hey there</h3>
                    <h3>أهلا</h3>
                    <h3>नमस्ते</h3>
                    <h3>ආයුබෝවන්</h3>
                </div>

                <h3>, I'm</h3>
            </div> */}

            <div className="intro_name">
                <span>Khalid Fazal</span>
                <span>Khalid Fazal</span>
            </div>

            <h2>I love building all things <br/>software!</h2>

            <p>
                I’m a full-stack software 
                <br/>
                developer specializing in 
                <br/>
                designing & developing digital 
                <br/>
                works of art. Take a stroll through here 
                <br/>
                and hopefully we'll end up working together!
            </p>

            <p>
                I’m a full-stack software developer specializing in designing & developing digital works 
                <br/>
                of art. I'm currently freelancing & working on my own projects in web, mobile & desktop development 
                <br/>
                & I'm always open to new adventures. Take a stroll through here and hopefully we'll end up working together!
            </p>

            <a className={"content_navigator " + theme} href="#about">Get to know me<br/><ArrowDarkSVG/><ArrowLightSVG/></a>
        </section>
    );
}