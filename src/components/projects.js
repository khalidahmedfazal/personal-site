import React, { useEffect } from "react";

import $ from 'jquery';
import ScrollReveal from "scrollreveal";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as FolderSVG } from '../assets/folder.svg';
import { ReactComponent as ExternalLinkSVG } from '../assets/external-link.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';

export default function Work({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.projects > .section_heading', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });

        var animDuration = 2500;
        var n = 1;
    
        $(".projects_content_item_wrapper").map((item) => {
            ScrollReveal().reveal(`.projects_content_item_wrapper:nth-of-type(${n})`, { scale: 1.5, duration: animDuration, easing: 'ease', mobile: false });
            n++; animDuration += 500;
        });

        ScrollReveal().reveal('h3', { opacity: 0, duration: animDuration + 1000, easing: 'ease', mobile: false });
    }, []);

    return(
        <section className={"projects " + theme} id="projects">
            <SectionHeading theme={theme} heading="projects"/>

            <div className="projects_content">
                <WorkItem 
                category={"website"} 
                name={"Yunus Fazly"} 
                description={"Portfolio of a content creator in the UAE, designed & developed with minimalism and modernity in mind."} 
                techs={[{tech: "WordPress"}, {tech: "PHP"}, {tech: "Sass"}, {tech: "JavaScript"}]}
                link="https://yunusfazly.com/"
                />

                <WorkItem 
                category={"website"} 
                name={"Portfolio"} 
                description={"My portfolio site created using React js, Sass & Paper.js, and hosted on AWS Amplify."} 
                techs={[{tech: "React.js"}, {tech: "Sass"}, {tech: "Paper.js"}]}
                github="https://github.com/khalidahmedfazal/personal-site"
                />
            </div>

            <label className="projects_soon">I've got more exciting projects in the works. Stay tuned!</label>
        </section>
    );
}

function WorkItem(props) {
    var gitLinkJSX;
    var extLinkJSX;
    
    if(props.github) gitLinkJSX = <a className='projects_content_item_top_git' target="_blank" href={props.github} rel="noreferer"><GitHubSVG/></a>
    if(props.link) extLinkJSX = <a className='projects_content_item_top_link' target="_blank" href={props.link} rel="noreferer"><ExternalLinkSVG/></a>
    
    return(
        <div className="projects_content_item_wrapper">
            <div className="projects_content_item">
                <div className="projects_content_item_top">
                    <FolderSVG />

                    <div className="projects_content_item_top_links">
                        {gitLinkJSX}
                        {extLinkJSX}
                    </div>
                </div>

                <div className="projects_content_item_bottom">
                    <label className="projects_content_item_bottom_category">//{props.category}</label>
                    <h3 className="projects_content_item_bottom_name">{props.name}</h3>
                    <p className="projects_content_item_bottom_description">{props.description}</p>
                    <label className="projects_content_item_bottom_technologies">{props.techs.map((tech) => {return(`${tech.tech} `)})}</label>
                </div>
            </div>
        </div>
    );
}