import React, { createContext, useMemo, useState } from 'react';

export const ColorContext = createContext()

const ColorProvider = (props) => {
    const [color, setColor] = useState('orange')
    const onColor = (text) => {
        setColor(text)
    }

    const value = useMemo(() => ({color, onColor}), [color, onColor])
    return (
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;