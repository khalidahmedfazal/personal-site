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

            </nav>
            
            <div className="header_resume">
                <div>
                    {/* <span>resume</span> */}
                    <a href="/">resume</a>
                </div>
            </div>
            
            <div className="header_hamburger">
                <span></span>
                <span></span>
            </div>
            
            <div className="header_drawer">

            </div>
        </header>
    );
}