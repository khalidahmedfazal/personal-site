import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import $ from "jquery";

import { SectionHeading } from "./sectionHeading";

export default function Experience({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.experience_content_companies_item.active', { origin: 'bottom', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, desktop: false });
        ScrollReveal().reveal('.experience_content_descriptions_item.active', { origin: 'top', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, desktop: false });
        ScrollReveal().reveal('.experience_content_companies_item.active', { origin: 'right', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, mobile: false });
        ScrollReveal().reveal('.experience_content_descriptions_item.active', { origin: 'left', distance: '60px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, mobile: false });
    }, []);

    const showDetails = () => {
        return(e) => {
            const id = e.target.id;

            $(".experience_content_companies_item").removeClass("active");
            $(".experience_content_descriptions_item").removeClass("active");

            const button = document.getElementById(id);
            const buttonOffset = button.offsetLeft;

            buttonOffset <= 50 ? $(".experience_content_companies").scrollLeft(0) : $(".experience_content_companies").scrollLeft(buttonOffset);

            $(button).addClass("active");
            $(`#${id}desc`).addClass("active");
        }
    }

    $(".experience_content_companies_item").on("click", showDetails());

    return(
        <section className={"experience " + theme} id="experience">
            <SectionHeading theme={theme} heading="experience"/>

            <div className="experience_content">
                <div className="experience_content_companies">
                    <button id="cristalcode" className="experience_content_companies_item active">
                        Cristal Code
                        <span>Colombo // Sri Lanka</span>
                    </button>
                </div>

                <div className="experience_content_descriptions">
                    <div id="cristalcodedesc" className="experience_content_descriptions_item active">
                        <h3>Full-stack developer</h3>
                        <label>November 2020 - May 2021</label>

                        <ul>
                            <li>
                                Wrote modern, performant, and robust code for clients
                            </li>
                            <li>
                                Collaborated with a small team to build software solutions for local businesses
                            </li>
                            <li>
                                Developed robust solutions and rapidly prototyped UIs using a variety of languages, frameworks and database technologies such as ASP.NET, Electron, Node js and SQL Server
                            </li>
                            <li>
                                Built and shipped a robust CMS and POS system as a single multi-platform desktop application
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}