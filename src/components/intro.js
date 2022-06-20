import React, { useEffect } from "react";
import $ from "jquery";

import ScrollReveal from "scrollreveal";

import { jumbleLetters } from "../helpers/letterJumbleHelper";

import { ReactComponent as ArrowDarkSVG } from '../assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from '../assets/arrow-light.svg';

export default function Intro({theme}) {
    useEffect(() => {
        ScrollReveal().reveal('.intro > p:nth-of-type(1)', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500 });
        ScrollReveal().reveal('.intro_name', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 2000 });
        ScrollReveal().reveal('.intro > h3', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 2500 });
        ScrollReveal().reveal('.intro > p:nth-of-type(2)', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 3000 });
        ScrollReveal().reveal('.intro > p:nth-of-type(3)', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 3000, mobile: false });
        ScrollReveal().reveal('.content_navigator > div:nth-of-type(1)', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 3500 });
        ScrollReveal().reveal('.content_navigator > div:nth-of-type(2)', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 4000 });

        jumbleLetters("Khalid Fazal", 30, ".intro_name > span", false);
    }, []);

    return(
        <section className={"intro " + theme} id="intro">
            <p>Hey there, I'm</p>
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

            <h3>I love building all things <br/>software!</h3>

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

            <a id="content-navigator" className={"content_navigator " + theme} href="#about">
                <div><label>Get to know me</label></div>
                <div><ArrowDarkSVG/><ArrowLightSVG/></div>
            </a>
        </section>
    );
}