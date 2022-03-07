import React from "react";

import '../styles/intro.css';

import { ReactComponent as ArrowDarkSVG } from '../assets/arrow-dark.svg';
import { ReactComponent as ArrowLightSVG } from '../assets/arrow-light.svg';

export default function Intro({theme}) {
    return(
        <section className={"intro " + theme} id="intro">
            <h3>Hey there, I'm</h3>

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