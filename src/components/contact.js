import React from "react";

import { SectionHeading } from "./sectionHeading";

export default function Contact({theme}){
    return(
        <section className={"contact " + theme} id="contact">
            <SectionHeading theme={theme} heading="get in touch with me" showSpan={false}/>

            <div className="contact_content">
                <p>
                    I'm currently looking for opportunities in web development, so if you feel like I'd make a good addition to your project or company, I'd be happy to have a chat with you!
                </p>
                
                <div className="contact_content_button">
                    <div>
                        <a href="mailto:khalidahmedfazal01@gmail.com">contact me</a>
                    </div>
                </div>
            </div>
        </section>
    );
}