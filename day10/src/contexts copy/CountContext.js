import React, { createContext, useState } from 'react';

export const CountContext = createContext()

const CountProvider = (props) => {
    //state , 함수 등 모든 처리
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount( count + 1)
    }
    const decrement = () => {
        setCount( count - 1)
    }
    return (
        <CountContext.Provider value={{count, increment, decrement}}>
            {/* 디자인이 들어오는 곳 . Provider로 공급한다. */}
            { props.children }
            {/* <Count/> */}
        </CountContext.Provider>
    );
};

export default CountProvider;