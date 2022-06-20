import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";

export default function Footer({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.footer > label:nth-of-type(1)', { origin: 'top', distance: '30px', easing: 'cubic-bezier(.5,0,0,1)', duration: 2000, easing: 'ease' });
        ScrollReveal().reveal('.footer > label:nth-of-type(2)', { origin: 'top', distance: '30px', easing: 'cubic-bezier(.5,0,0,1)', duration: 1500, easing: 'ease' });
    }, []);

    return(
        <footer className={"footer " + theme} id="footer">
            <label>Designed & Developed by Khalid Fazal</label>
            <label>2022 - All rights not reserved</label>
        </footer>
    );
}