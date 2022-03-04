import React, { useState, useEffect } from "react";
import $ from 'jquery';

import '../styles/header.css';

import { ReactComponent as LogoDarkSVG } from '../assets/logo-dark.svg';
import { ReactComponent as LogoLightSVG } from '../assets/logo-light.svg';

import SocialSection from "./socials-section";
import ThemeToggle from "./theme-toggle";

export default function Header({theme}) {
    const [ drawerState, setDrawerState ] = useState("");
    const [ headerState, setHeaderState ] = useState("");

    var scrollOffset = 0;

    useEffect(() => {
        window.onscroll = () => {
            handleScroll();
        };

        const headerHeight = $(".header").outerHeight();

        $(".header_drawer").css({
            "height" : `calc(100vh - ${headerHeight}px)`,
            "top" : `${headerHeight}px`
        });
    }, []);

    function toggleDrawerState() {
        $("html").toggleClass("noscroll");
        
        drawerState === 'open' ? setDrawerState('') : setDrawerState('open');
    }
  
    function handleScroll(){
        var scroll = window.pageYOffset || document.documentElement.scrollTop;

        scroll <= 0 ? $(".scrolltotop").removeClass("scrolled") : $(".scrolltotop").addClass("scrolled");
    
        if (scroll > scrollOffset) {
            setHeaderState("scrolled");
        } 
        else {
            setHeaderState("");
        }
    
        scrollOffset = scroll;
    }

    $(".header_drawer_bottom_menu > nav > a").on("click", (e) => {
        e.preventDefault();
    });

    function handleMobileNav(id) {
        toggleDrawerState();
        document.getElementById(id).scrollIntoView();
    }

    return(
        <header className={theme + ' ' + headerState}>
            <div className={"header " + theme}>
                <div className="header_logo">
                    <a href="/"><LogoDarkSVG/><LogoLightSVG/></a>
                </div>
                
                <nav>
                    <a href="#about">about</a>
                    <a href="#experience">experience</a>
                    <a href="#work">my work</a>
                    <a href="#contact">contact me</a>
                </nav>
                
                <div className="header_resume">
                    <div>
                        <a href="/">resume</a>
                    </div>
                </div>
                
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
                            <a href="#" onClick={() => handleMobileNav('about')}>about</a>
                            <a href="#" onClick={() => handleMobileNav('experience')}>experience</a>
                            <a href="#" onClick={() => handleMobileNav('work')}>my work</a>
                            <a href="#" onClick={() => handleMobileNav('contact')}>contact me</a>
                        </nav>
                    
                        <div className="header_drawer_bottom_menu_resume">
                            <div>
                                <a href="/">resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}