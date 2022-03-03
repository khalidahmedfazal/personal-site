import React from "react";

const ThemeContext = React.createContext(true);

const ThemeProvider = ({ children })  =>  {
    const [ darkMode, setDarkMode ] = React.useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return  (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };