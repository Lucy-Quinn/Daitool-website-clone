import React, { createContext, useState } from 'react';

const ThemeContextProvider = (props) => {

    const [themes, setThemes] = useState({
        primaryColorOrange: '#ff723d', primaryColorBlue: '#92d2d9', mediumGray: '#C4C4C4',
        lightColorGray: '#ececec', lightColorLightGray: '#f9f9fb', white: '#fff', black: '#000000', blackButton: '#232323', darkGray: '#52575C', footerColor: '#5C5C5C'
    });

    return (
        <ThemeContext.Provider value={{ themes }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export const ThemeContext = createContext();
export default ThemeContextProvider;