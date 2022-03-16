import React from "react";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as ExternalLinkSVG } from '../assets/external-link.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';

export default function Work({theme}){
    return(
        <section className={"work " + theme} id="work">
            <SectionHeading theme={theme} heading="projects"/>

            <div className="work_content">
                <WorkItem category={"website"} name={"portfolio"} description={"My portfolio site made using React & Sass, & hosted on AWS Amplify."} 
                techs={[{tech: "React.js"}, {tech: "Sass"}, {tech: "Paper.js"}]}/>
            </div>
        </section>
    );
}

function WorkItem({category, name, description, techs, github, link}) {
    return(
        <div className="work_content_item">
            <div className="work_content_item_top">
                {() => {
                    if(github) <a className="work_content_item_top_git" href={github}><GitHubSVG/></a> 
                    if(link) <a className="work_content_item_top_link" href={link}><ExternalLinkSVG/></a> 
                }}
            </div>

            <div className="work_content_item_bottom">
                <label className="work_content_item_bottom_category">//{category}</label>
                <label className="work_content_item_bottom_name">{name}</label>
                <p className="work_content_item_bottom_description">{description}</p>
                <label className="work_content_item_bottom_technologies">{techs.map((tech) => {return(`${tech.tech} `)})}</label>
            </div>
        </div>
    );
}