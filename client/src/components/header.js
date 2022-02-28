import React, { useState, useEffect } from "react";
import '../styles/header.css';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import SocialSection from "./socials-section";
import $ from 'jquery';

export default function Header() {
    const [ drawerState, setDrawerState ] = useState("");
    const [ scrollOffset, setScrollOffset ] = useState(0);
    const [ headerState, setHeaderState ] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

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
            $(".header_drawer").hasClass("open") ? setHeaderState("") : setHeaderState("scrolled");
            //setHeaderState("scrolled");
        } 
        else {
            setHeaderState("");
        }
    
        scroll <= 0 ? setScrollOffset(0) : setScrollOffset(scroll);
    }

    /*window.onscroll = () => {
        handleScroll();
    };*/

    return(
        <header className={headerState}>
            <div className="header">
                <div className="header_logo">
                    <a href="/"><LogoSVG/></a>
                </div>
                
                <nav>
                    <a href="#about">about</a>
                    <a href="#experience">experience</a>
                    <a href="#mywork">my work</a>
                    <a href="#contactme">contact me</a>
                </nav>
                
                <div className="header_resume">
                    <div>
                        <a href="/">resume</a>
                    </div>
                </div>
                
                <div className={"header_hamburger " + drawerState} onClick={() => toggleDrawerState()}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={"header_drawer " + drawerState}>
                <div className="header_drawer_bottom">
                    <SocialSection/>

                    <div className="header_drawer_bottom_menu">
                        <nav>
                            <a href="#about">about</a>
                            <a href="#experience">experience</a>
                            <a href="#mywork">my work</a>
                            <a href="#contactme">contact me</a>
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