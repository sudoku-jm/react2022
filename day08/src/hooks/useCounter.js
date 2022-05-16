import React, { useState } from 'react';

//initialState 매개변수로 받아온다. 기본값 10
export const useCounter = (initialState = 10) => {
    const [state, setState] = useState( initialState )

    //증가
    const increment = () => {
        setState(prev => prev + 1)
    }
    
    //감소
    const decrement = () => {
        setState(prev => prev - 1)
    }

    //초기값
    const reset = () => {
        setState(initialState)
    }

    return {state, increment, decrement, reset}
};
