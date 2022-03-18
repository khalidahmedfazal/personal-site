import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Footer({theme}){
    useEffect(() => {
        ScrollReveal().reveal('.footer > label:nth-of-type(1)', { scale: 1.5, duration: 2000, easing: 'ease', mobile: false });
        ScrollReveal().reveal('.footer > label:nth-of-type(2)', { scale: 1.5, duration: 2500, easing: 'ease', mobile: false });
    }, []);

    return(
        <footer className={"footer " + theme} id="footer">
            <label>Designed & Developed by Khalid Fazal</label>
            <label>2022 - All rights not reserved</label>
        </footer>
    );
}