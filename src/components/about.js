import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

import $ from "jquery";
import TagCloud from "TagCloud";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as TechPatternSVG } from '../assets/tech-pattern-dark.svg';

export default function About({theme}) {
    var animated = false;   //Variable to indicate that SVG has been animated
    var contentOffset = 0;
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        contentOffset = $("#about").offset().top;

        ScrollReveal().reveal('.about > .section_heading', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.about_content_text', { scale: 1.5, duration: 2500, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.about_content_techs-wrapper', { scale: 1.5, duration: 3000, easing: 'ease', mobile: false });
    }, [])

    useEffect(() => {
        initTagCloud();
        document.addEventListener('scroll', handleScroll);

        if((window.pageYOffset + (vh * .7)) >= contentOffset) {
            initTagCloudWrapperAnim(true);
            initTagCloudWrapperAnim(false);
        }
    }, [theme])

    const initTagCloud = () => {
        $("#tagcloud-techs").empty();

        const texts = [ 'JavaScript', 'React', 'Sass', 'WordPress', 'ASP.NET', 'Android', 'Spring Boot', 'Node js', 'SQL Server', 'MySQL', 'Git', 'jQuery', 'HTML', 'AWS', 'CSS' ];
        var radiusVw;
        var radius;

        if(vw >= 1024) {
            radiusVw = 10.416; //200px in vw(1920)
            radius = (radiusVw * vw) / 100; //px equivalent of vw
        }
        else {
            radius = vw - (vw * .6); //60% of viewport
        }

        const options = {
            radius: radius,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 90,
            keep: true,
            containerClass: "tagcloud " + theme,
            itemClass: "tagcloud--item technologies " + theme
        };
    
        TagCloud("#tagcloud-techs", texts, options);
    }

    const handleScroll = () => {
        var scrollAmount = window.pageYOffset;

        //If the page's Y offset plus 70% of the viewport height is >= to the top offset of the "About" section
        if(vw >= 1024) {
            if((scrollAmount + (vh * .7)) >= contentOffset) {
                if(!animated) {
                    initTagCloudWrapperAnim(false);
                    animated = true;
                }
            }
            else if(scrollAmount < contentOffset){
                initTagCloudWrapperAnim(true);
                animated = false;
            }
        }
    }

    //Function to initiate the tag cloud's background SVG animation
    const initTagCloudWrapperAnim = (isNoAnim) => {
        isNoAnim ? $(`.about_content_techs-wrapper.${theme} > svg > path`).css({ animation: `` }) : $(`.about_content_techs-wrapper.${theme} > svg > path`).css({ animation: `dash-${theme} 5s forwards ease-in-out` });
    }

    return(
        <section className={"about " + theme} id="about">
            <SectionHeading theme={theme} heading="about"/>

            <div className="about_content" id="about-content">
                <div className="about_content_text">
                    <p>
                        Looks like you made it here! Well, I'm <em>Khalid</em> and I love creating things <br/>that live on the web. I'm a <em>20</em> year old tech geek with a bachelor's <br/>degree in Engineering from <em>Staffordshire University</em>, with <br/>a focus in <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion for <br/><em>frontend development</em>. My other areas of interest are <em>game</em> <br/><em>development</em>, <em>IoT</em> and <em>graphic designing</em>. While I'm not <br/>grinding, I hop on <em>Warzone</em>, <em>work out</em> or watch some <br/>good old <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here's a cool little thingy of the technologies I've been working with.</p>
                </div>
                    
                <div className={"about_content_techs-wrapper " + theme} id="tagcloud-techs-wrapper">
                    <TechPatternSVG/>

                    <div className="about_content_techs" id="tagcloud-techs">
                    </div>
                </div>
            </div>
        </section>
    );
}