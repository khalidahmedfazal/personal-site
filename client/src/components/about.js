import React from "react";
import '../styles/about.css';

export default function About() {
    return(
        <div className="about" id="about">
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
                        Hello there! I'm Khalid and I love creating things that live on the  
                        <br/>
                        web. I'm a 20 year old tech geek with a bachelor's degree in 
                        <br/>
                        Engineering from Staffordshire University, with a focus 
                        <br/>
                        in Software Engineering.
                    </p>

                    <p>
                        While I consider myself a full-stack developer, I have a passion for front
                        <br/>
                        end development. My other areas of interest are game development,
                        <br/>
                        IoT and graphic designing. In my free time, I play video 
                        <br/>
                        games, go to the gym and watch Formula 1. 
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
                    <img src=""/>
                    <span></span>
                </div>
            </div>
        </div>
    );
}