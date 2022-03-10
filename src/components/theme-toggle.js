import React from "react";

import { ThemeContext } from "../contexts/themeContext";

import { ReactComponent as MoonSVG } from '../assets/moon.svg';
import { ReactComponent as SunSVG } from '../assets/sun.svg';

export default function ThemeToggle({theme}) {
    const { toggleDarkMode } = React.useContext(ThemeContext);

    return(
        <div className={"theme_toggler " + theme}>
            <button className="theme_toggler_toggle" onClick={toggleDarkMode}>
                <SunSVG/><MoonSVG/>
            </button>
        </div>
    );
}