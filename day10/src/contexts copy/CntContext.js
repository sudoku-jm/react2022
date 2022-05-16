import React, { createContext, useState } from 'react';

export const CntContext = createContext()

const CntProvider = ( props ) => {
    const [cnt, setCnt] = useState(0)
    const increment = (step) => {
        setCnt( cnt => cnt + step)
    }
    const decrement = (step) => {
        setCnt( cnt => cnt - step)
    }
    
    return (
        <CntContext.Provider value={{cnt, increment , decrement}}>
            {props.children}
        </CntContext.Provider>
    );
};

export default CntProvider;