import React from "react";
import "../styles/socials-section.css"
import { ReactComponent as EmailDarkSVG } from '../assets/email-dark.svg';
import { ReactComponent as GitHubDarkSVG } from '../assets/github-dark.svg';
import { ReactComponent as LinkedInDarkSVG } from '../assets/linkedin-dark.svg';
import { ReactComponent as EmailLightSVG } from '../assets/email-light.svg';
import { ReactComponent as GitHubLightSVG } from '../assets/github-light.svg';
import { ReactComponent as LinkedInLightSVG } from '../assets/linkedin-light.svg';

export default function SocialSection({theme}) {
    return(
        <div className={"socials_section " + theme}>
            <span></span>

            <div className="socials_section_menu">
                <a href="mailto:khalidahmedfazal01@gmail.com"><EmailDarkSVG/><EmailLightSVG/></a>
                <a href="https://github.com/khalidahmedfazal" target="_blank"><GitHubDarkSVG/><GitHubLightSVG/></a>
                <a href="https://www.linkedin.com/in/khalidahmedfazal/" target="_blank"><LinkedInDarkSVG/><LinkedInLightSVG/></a>
            </div>

            <span></span>
        </div>
    );
}