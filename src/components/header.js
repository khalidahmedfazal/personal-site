import React, { useState, useEffect } from "react";

import $ from 'jquery';

import SocialSection from "./socialsSection";
import ThemeToggle from "./themeToggle";

import { ReactComponent as LogoDarkSVG } from '../assets/logo-dark.svg';
import { ReactComponent as LogoLightSVG } from '../assets/logo-light.svg';
import logoDark from '../assets/images/logoDark.png';
import logoLight from '../assets/images/logoLight.png';
import Resume from '../assets/resume.pdf';

export default function Header({theme}) {
    const [ drawerState, setDrawerState ] = useState("");
    const [ headerState, setHeaderState ] = useState("");

    useEffect(() => {
        window.onscroll = () => {
            handleScroll();
        };

        var scrollOffset = 0;
  
        const handleScroll = () => {
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
    
            scroll <= 0 ? $(".scrolltotop").removeClass("scrolled").addClass("not-scrolled") : $(".scrolltotop").removeClass("not-scrolled").addClass("scrolled");
        
            if (scroll > scrollOffset) {
                setHeaderState("scrolled");
            } 
            else {
                setHeaderState("");
            }
        
            scrollOffset = scroll;
        }

        const headerHeight = $(".header").outerHeight();

        $(".header_drawer").css({
            "height" : `calc(100vh - ${headerHeight}px)`,
            "top" : `${headerHeight}px`
        });
    }, []);

    const toggleDrawerState = () => {
        $("html").toggleClass("noscroll");
        
        drawerState === 'open' ? setDrawerState('') : setDrawerState('open');
    }

    $(".header_drawer_bottom_menu > nav > a").on("click", (e) => {
        e.preventDefault();
    });

    const handleMobileNav = (id) => {
        toggleDrawerState();
        document.getElementById(id).scrollIntoView();
    }

    return(
        <header className={theme + ' ' + headerState}>
            <div className={"header " + theme} id="header">
                <div className="header_logo">
                    <a href="/">
                        {/* <LogoDarkSVG/><LogoLightSVG/> */}
                        <img src={logoDark} alt="Khalid Fazal logo" />
                        <img src={logoLight} alt="Khalid Fazal logo" />
                    </a>
                </div>
                
                <nav>
                    <a href="#about">//about</a>
                    <a href="#experience">//experience</a>
                    <a href="#projects">//projects</a>
                    <a href="#contact">//contact me</a>
                </nav>

                <ResumeButton location="header_desktop" theme={theme} />
                
                <ThemeToggle theme={theme} />
                
                <div className={"header_hamburger " + drawerState} onClick={() => toggleDrawerState()}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={"header_drawer " + theme + " " + drawerState}>
                <div className="header_drawer_bottom">
                    <SocialSection theme={theme}/>

                    <div className="header_drawer_bottom_menu">
                        <ThemeToggle theme={theme} />

                        <nav>
                            <a href="#about" onClick={() => handleMobileNav('about')}>//about</a>
                            <a href="#experience" onClick={() => handleMobileNav('experience')}>//experience</a>
                            <a href="#projects" onClick={() => handleMobileNav('work')}>//projects</a>
                            <a href="#contact" onClick={() => handleMobileNav('contact')}>//contact me</a>
                        </nav>

                        <ResumeButton location="drawer" theme={theme} />
                    </div>
                </div>
            </div>
        </header>
    );
}

function ResumeButton(props) {
    return(
        <div className={"resume_button_wrapper " + props.location + " " + props.theme}>
            <a className="resume_button" href={Resume} target="_blank" rel="noreferrer"><span>resume</span></a>
        </div>
    );
}