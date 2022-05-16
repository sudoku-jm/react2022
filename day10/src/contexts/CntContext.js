import React, { createContext, useMemo, useState } from 'react';

export const CntContext = createContext()

const CntProvider = ( props ) => {
    const [cnt, setCnt] = useState(0)
    const increment = (step) => {
        setCnt( cnt => cnt + step)
    }
    const decrement = (step) => {
        setCnt( cnt => cnt - step)
    }

    const value = useMemo( () => ({cnt, increment , decrement}), [cnt, increment , decrement])
    
    return (
        <CntContext.Provider value={value}>
            {props.children}
        </CntContext.Provider>
    );
};

export default CntProvider;