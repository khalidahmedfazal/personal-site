import ScrollReveal from "scrollreveal";

export default function Footer({theme}){
    ScrollReveal().reveal('.footer > label:nth-of-type(1)', { scale: 1.5, duration: 2000, easing: 'ease' });
    ScrollReveal().reveal('.footer > label:nth-of-type(2)', { scale: 1.5, duration: 2500, easing: 'ease' });

    return(
        <footer className={"footer " + theme} id="footer">
            <label>Designed & Developed by Khalid Fazal</label>
            <label>2022 - All rights not reserved</label>
        </footer>
    );
}