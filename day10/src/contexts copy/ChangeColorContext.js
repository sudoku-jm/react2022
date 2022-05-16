import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {

    //상태값, 이벤트함수
    const [color, setColor] = useState('red')
    const onColor = (text) => {
        setColor(text)
    }

    return (
        <ChangeColorContext.Provider value={{color, onColor}}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;