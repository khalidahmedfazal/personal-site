import React from "react";
import '../styles/header.css';
import { ReactComponent as LogoSVG } from '../assets/logo.svg';
import { ReactComponent as EmailSVG } from '../assets/email.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';
import { ReactComponent as LinkedInSVG } from '../assets/linkedin.svg';

export default function Header() {
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
            
            <div className="header_hamburger">
                <span></span>
                <span></span>
            </div>
            
            <div className="header_drawer open">
                <div className="header_drawer_top">
                    <a href="/"><LogoSVG/></a>
            
                    <div className="header_drawer_top_close">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <div className="header_drawer_bottom">
                    <div className="header_drawer_bottom_socials">
                        <span></span>

                        <div className="header_drawer_bottom_socials_menu">
                            <a href="mailto:khalidahmedfazal01@gmail.com"><EmailSVG/></a>
                            <a href="https://github.com/khalidahmedfazal" target="_blank"><GitHubSVG/></a>
                            <a href="https://www.linkedin.com/in/khalidahmedfazal/" target="_blank"><LinkedInSVG/></a>
                        </div>

                        <span></span>
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