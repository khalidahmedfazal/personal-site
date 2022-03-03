import React, { useEffect } from "react";
import '../styles/about.css';
import portrait from '../assets/portrait.jpg';

export default function About({theme}) {
    return(
        <div className={"about " + theme} id="about">
            <div className="about_heading">
                <h1>About<span>About</span></h1>
                
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="about_content">
                <div className="about_content_text">
                    <p>
                        Hello there! I'm Khalid and I love creating things that live on the web. I'm a <em>20</em> year old tech geek with a bachelor's degree in Engineering from <em>Staffordshire University</em>, with a focus in <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion for <em>frontend development</em>. My other areas of interest are <em>game development</em>, <em>IoT</em> and <em>graphic designing</em>. In my free time, I play <em>video games</em>, <em>work out</em> and watch <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here are a few technologies I've been working with recently:</p>

                    <ul>
                        <li>Node js</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                        <li>WordPress</li>
                        <li>ASP.NET</li>
                        <li>Native Android</li>
                    </ul>
                </div>

                <div className="about_content_text">
                    <p>
                        Hello there! I'm Khalid and I love creating things that live on the
                        <br/>
                        web. I'm a <em>20</em> year old tech geek with a bachelor's degree in
                        <br/>
                        Engineering from <em>Staffordshire University</em>, with a focus
                        <br/>
                        in <em>Software Engineering</em>.
                    </p>

                    <p>
                        While I consider myself a <em>full-stack developer</em>, I have a passion
                        <br/>
                        for <em>frontend development</em>. My other areas of interest are <em>game</em>
                        <br/>
                        <em>development</em>, <em>IoT</em> and <em>graphic designing</em>. In my free time,
                        <br/>
                        I play <em>video games</em>, <em>work out</em> and watch <em>Formula 1</em>. 
                    </p>
                    
                    <p>Here are a few technologies I've been working with recently:</p>

                    <ul>
                        <li>Node js</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                        <li>WordPress</li>
                        <li>ASP.NET</li>
                        <li>Native Android</li>
                    </ul>
                </div>

                <div className="about_content_portrait">
                    <span></span>
                    <img src={portrait} alt="portrait"/>
                </div>
            </div>
        </div>
    );
}