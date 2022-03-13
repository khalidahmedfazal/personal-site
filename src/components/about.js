import React, { useEffect } from "react";

import $ from "jquery";
import TagCloud from "TagCloud";

import { SectionHeading } from "./sectionHeading";

import Portrait from '../assets/portrait.webp';

export default function About({theme}) {

    useEffect(() => {
        $("#tagcloud-techs").empty();

        const texts = [
            'JavaScript', 'React', 'Sass', 'WordPress', 'ASP.NET', 'Android', 'Spring Boot', 'Node js', 'SQL Server', 'MySQL', 'Git', 'jQuery', 'HTML', 'AWS', 'CSS'
        ];
        const vw = window.innerWidth;
        var radiusVw;
        var radius;

        if(vw >= 1024) {
            radiusVw = 10.416; //200px in vw(1920)
            radius = (radiusVw * vw) / 100; //px equivalent of vw
        }
        else {
            radius = vw - (vw * .6);
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
    
        TagCloud(".about_content_techs", texts, options);
    }, [window.innerWidth, theme])
    

    return(
        <section className={"about " + theme} id="about">
            <SectionHeading theme={theme} heading="about"/>

            <div className="about_content">
                <div className="about_content_text">
                    <p>
                        Look like you made it here! Well, I'm <em>Khalid</em> and I love creating things that live on the web. I'm a <em>20</em> year old tech geek with a bachelor's degree in Engineering from <em>Staffordshire University</em>, with a focus in <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion for <em>frontend development</em>. My other areas of interest are <em>game development</em>, <em>IoT</em> and <em>graphic designing</em>. In my free time, I play <em>video games</em>, <em>work out</em> and watch <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here's a cool little thingy of the technologies I've been working with.</p>

                    {/* <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>WordPress</li>
                        <li>ASP.NET</li>
                        <li>Android</li>
                    </ul> */}
                </div>

                <div className="about_content_text">
                    <p>
                        Look like you made it here! Well, I'm <em>Khalid</em> and I love creating things
                        <br/>
                        that live on the web. I'm a <em>20</em> year old tech geek with a bachelor's
                        <br/>
                        degree in Engineering from <em>Staffordshire University</em>, with
                        <br/>
                        a focus in <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion for
                        <br/>
                        <em>frontend development</em>. My other areas of interest are <em>game</em>
                        <br/>
                        <em>development</em>, <em>IoT</em> and <em>graphic designing</em>. In my free
                        <br/>
                        time, I hop on <em>Warzone</em>, <em>work out</em> or watch some 
                        <br/>
                        good old <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here's a cool little thingy of the technologies I've been working with.</p>

                    {/* <ul id="techs">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Sass</li>
                        <li>WordPress</li>
                        <li>ASP.NET</li>
                        <li>Android</li>
                    </ul> */}
                    {/* <div className="about_content_text_techs"></div> */}
                </div>

                {/* <div className="about_content_portrait">
                    <span></span>

                    <img src={Portrait} alt="portrait" />
                </div> */}
                    
                <div className="about_content_techs" id="tagcloud-techs"></div>
            </div>
        </section>
    );
}