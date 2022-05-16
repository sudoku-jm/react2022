import React, { createContext, useState } from 'react';

export const ColorContext = createContext()

const ColorProvider = (props) => {
    const [color, setColor] = useState('orange')
    const onColor = (text) => {
        setColor(text)
    }
    return (
        <ColorContext.Provider value={{color, onColor}}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;