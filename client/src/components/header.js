import React, { useState } from "react";
import '../styles/header.css';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import SocialSection from "./socials-section";

export default function Header() {
    const [drawerState, setDrawerState] = useState("");

    return(
        <header>
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
            
            <div className="header_hamburger" onClick={() => setDrawerState('open')}>
                <span></span>
                <span></span>
            </div>
            
            <div className={"header_drawer " + drawerState}>
                <div className="header_drawer_top">
                    <a href="/"><LogoSVG/></a>
            
                    <div className="header_drawer_top_close" onClick={() => setDrawerState('')}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
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