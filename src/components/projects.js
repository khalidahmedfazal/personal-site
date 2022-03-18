import React from "react";

import $ from 'jquery';
import ScrollReveal from "scrollreveal";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as ExternalLinkSVG } from '../assets/external-link.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';

export default function Work({theme}){
    ScrollReveal().reveal('.projects > .section_heading', { scale: 1.5, duration: 2000, easing: 'ease' });

    var animDuration = 2500;
    var n = 1;

    $(".projects_content_item").map((item) => {
        ScrollReveal().reveal(`.projects_content_item:nth-of-type(${n})`, { scale: 1.5, duration: animDuration, easing: 'ease' });
        n++; animDuration += 500;
    });

    return(
        <section className={"projects " + theme} id="projects">
            <SectionHeading theme={theme} heading="projects"/>

            <div className="projects_content">
                <WorkItem category={"website"} name={"portfolio"} description={"My portfolio site made using React & Sass, & hosted on AWS Amplify."} 
                techs={[{tech: "React.js"}, {tech: "Sass"}, {tech: "Paper.js"}]}/>
            </div>
        </section>
    );
}

function WorkItem(props) {
    return(
        <div className="projects_content_item">
            <div className="projects_content_item_top">
                {() => {
                    if(props.github) <a className="projects_content_item_top_git" href={props.github}><GitHubSVG/></a> 
                    if(props.link) <a className="projects_content_item_top_link" href={props.link}><ExternalLinkSVG/></a> 
                }}
            </div>

            <div className="projects_content_item_bottom">
                <label className="projects_content_item_bottom_category">//{props.category}</label>
                <label className="projects_content_item_bottom_name">{props.name}</label>
                <p className="projects_content_item_bottom_description">{props.description}</p>
                <label className="projects_content_item_bottom_technologies">{props.techs.map((tech) => {return(`${tech.tech} `)})}</label>
            </div>
        </div>
    );
}