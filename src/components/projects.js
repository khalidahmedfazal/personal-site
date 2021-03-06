import React, { useEffect } from "react";

import $ from 'jquery';
import ScrollReveal from "scrollreveal";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as FolderSVG } from '../assets/folder.svg';
import { ReactComponent as ExternalLinkSVG } from '../assets/external-link.svg';
import { ReactComponent as GitHubSVG } from '../assets/github.svg';

export default function Work({theme}){
    useEffect(() => {
        var animDuration = 1500;
        var n = 1;
    
        $(".projects_content_item_wrapper").map((item) => {
            var direction = "";
            n%2 === 0 ? direction = "right" : direction = "left";

            ScrollReveal().reveal(`.projects_content_item_wrapper:nth-of-type(${n})`, { origin: direction, distance: '100px', easing: 'cubic-bezier(.5,0,0,1)', duration: animDuration, desktop: false });
            ScrollReveal().reveal(`.projects_content_item_wrapper:nth-of-type(${n})`, { origin: "bottom", distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: animDuration, mobile: false });
            n++; animDuration += 500;
        });
    }, []);

    return(
        <section className={"projects " + theme} id="projects">
            <SectionHeading theme={theme} heading="projects"/>

            <div className="projects_content">
                <WorkItem 
                category={"blog"} 
                name={"Diary of A Hobbit"} 
                description={"This project was the design and development of a daily life and Islamic blogsite for a blogger in the KSA."} 
                techs={["WordPress", "PHP", "Sass", "JavaScript", "Custom Theme"]}
                link="https://www.diaryofahobbit.com/"
                />

                <WorkItem 
                category={"portfolio"} 
                name={"Yunus Fazly"} 
                description={"This project was a portfolio of a content creator in the UAE, designed & developed with minimalism and modernity in mind."} 
                techs={["WordPress", "PHP", "Sass", "JavaScript", "Custom Theme"]}
                link="https://yunusfazly.com/"
                />

                <WorkItem 
                category={"portfolio"} 
                name={"Personal Portfolio"} 
                description={"My portfolio site created using React js, Sass & Paper.js, and hosted on AWS Amplify."} 
                techs={["React.js", "Sass", "Paper.js"]}
                github="https://github.com/khalidahmedfazal/personal-site"
                />
            </div>
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
                    <label className="projects_content_item_bottom_technologies">{props.techs.map((tech) => {return(`${tech} `)})}</label>
                </div>
            </div>
        </div>
    );
}