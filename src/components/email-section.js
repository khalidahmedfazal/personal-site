import React from "react";

export default function EmailSection({theme}) {
    return(
        <div className={"email_section " + theme}>
            <div className="email_section_container">
                <span></span>
                <a href="mailto:khalidahmedfazal01@gmail.com"><label>khalidahmedfazal01@gmail.com</label>khalidahmedfazal01@gmail.com</a>
                <span></span>
            </div>
        </div>
    );
}