import React from "react";

import { SectionHeading } from "./sectionHeading";

import "../styles/experience.css";

export default function Experience({theme}){
    return(
        <section className={"experience " + theme} id="experience">
            <SectionHeading theme={theme} heading="experience"/>

            <div className="experience_content">

            </div>
        </section>
    );
}