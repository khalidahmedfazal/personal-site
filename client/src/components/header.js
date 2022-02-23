import React from "react";
import '../styles/header.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Header() {
    return(
        <header>
            <div className="header_logo">
                <a href="/"><Logo/></a>
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
            
            <div className="header_hamburger">
                <span></span>
                <span></span>
            </div>
            
            <div className="header_drawer open">
                <div className="header_drawer_top">
                    <a href="/"><Logo/></a>
            
                    <div className="header_drawer_top_close">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className="header_drawer_bottom">
                    <div className="header_drawer_bottom_socials">
                        
                    </div>

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