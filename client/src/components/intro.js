import React from "react";
import '../styles/intro.css';
import { ReactComponent as ArrowSVG } from '../assets/arrow.svg';
import SocialSection from "./socials-section";
import EmailSection from "./email-section";

export default function Intro() {
    function goToAbout(){

    }

    return(
        <div className='content_intro' id="about">
            <SocialSection/>

            <div className="intro">
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

                <button className="content_navigator" onClick={() => goToAbout()}>Get to know me<br/><ArrowSVG/></button>
            </div>

            <EmailSection/>
        </div>
    );
}