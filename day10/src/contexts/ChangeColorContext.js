import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {

    //상태값, 이벤트함수
    const [color, setColor] = useState('red')
    const onColor = (text) => {
        setColor(text)
    }

    //useMenu(() => (),[])
    const value = useMemo(() => ({color, onColor}) ,[color, onColor])

    return (
        <ChangeColorContext.Provider value={value}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;