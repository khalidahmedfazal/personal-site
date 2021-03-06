import React, { useEffect, useState } from "react";

import ScrollReveal from "scrollreveal";

import $ from "jquery";
import TagCloud from "TagCloud";

import { SectionHeading } from "./sectionHeading";

import { ReactComponent as TechPatternSVG } from '../assets/tech-pattern-dark.svg';

export default function About({theme}) {
    const [ isAnimated, setIsAnimated ] = useState(false);  //State that represents whether initial animation of tag cloud SVG has been triggered by scroll
    
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    useEffect(() => {
        getAge();
        window.addEventListener('scroll', handleScroll);
        
        ScrollReveal().reveal('.about_content_text', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, mobile: true });
        ScrollReveal().reveal('.about_content_techs-wrapper', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, mobile: false });
        ScrollReveal().reveal('.about_content_techs-wrapper', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 2000, desktop: false });

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
    useEffect(() => {
        initTagCloud();
        var scrollAmount = window.pageYOffset;
        var contentOffset = $("#about").offset().top;

        if(isAnimated) initTagCloudWrapperAnim(scrollAmount, contentOffset, false);
    }, [theme]);

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
        var contentOffset = $("#about").offset().top;

        if(vw >= 1024) {
            initTagCloudWrapperAnim(scrollAmount, contentOffset, true);
            setIsAnimated(true);
        }
    }

    //Function to initiate the tag cloud's background SVG animation
    const initTagCloudWrapperAnim = (scrollAmount, contentOffset, checkScroll) => {
        const element = `.about_content_techs-wrapper.${theme} > svg > path`;
        const style = `dash-${theme} 5s forwards ease-in-out`;
        var percentageToAdd = .5;

        if(checkScroll) {
            //If the page's Y offset + 50% of the viewport height is >= to the top offset of the "About" section
            if((scrollAmount + (vh * percentageToAdd)) >= contentOffset) {
                $(element).css({ animation: style });
            }
        }
        else {
            $(element).css({ animation: style });
        }
    }

    //Get age
    const getAge = () => {
        var today = new Date();
        var birthDate = new Date("2001/06/17");
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return(
        <section className={"about " + theme} id="about">
            <SectionHeading theme={theme} heading="about"/>

            <div className="about_content" id="about-content">
                <div className="about_content_text">
                    <p>
                        Looks like you made it here! Well, I'm <em>Khalid</em> and I love creating things <br/>that live on the web. I'm a <em>{getAge()}-year-old</em> tech geek with a bachelor's <br/>degree in Engineering from <em>Staffordshire University</em>, with <br/>a focus on <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion for <br/><em>frontend development</em>. My other areas of interest are <em>game</em> <br/><em>development</em>, <em>IoT</em>, and <em>graphic designing</em>. In my free time, <br/>I get on <em>Warzone</em>, <em>go to the gym</em> or watch some <br/>good old <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here's a cool little thingy of the technologies I've been working with recently.</p>
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