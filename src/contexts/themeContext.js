import React from "react";

var localTheme = (localStorage.getItem('darkMode') === 'true');

const ThemeContext = React.createContext();

const ThemeProvider = ({ children })  =>  {
    const [ darkMode, setDarkMode ] = React.useState(localTheme);

    React.useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [ darkMode ]);

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