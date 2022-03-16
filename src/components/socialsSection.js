import React from "react";

import { ReactComponent as EmailSVG } from '../assets/email.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';
import { ReactComponent as LinkedInSVG } from '../assets/linkedin.svg';

export default function SocialSection({theme}) {
    return(
        <div className={"socials_section " + theme}>
            <span></span>

            <div className="socials_section_menu">
                <a href="mailto:khalidahmedfazal01@gmail.com"><EmailSVG/></a>
                <a href="https://github.com/khalidahmedfazal" target="_blank" rel="noreferrer"><GitHubSVG/></a>
                <a href="https://www.linkedin.com/in/khalidahmedfazal/" target="_blank" rel="noreferrer"><LinkedInSVG/></a>
            </div>

            <span></span>
        </div>
    );
}