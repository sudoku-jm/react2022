import React, { useState } from 'react';

export const useCounter = (intialState = 5) => {
    const [state, setState] = useState(intialState)

    const increment = () => {
        setState(state + 1)
    }
    const decrement = () => {
        setState(state - 1)
    }
    const reset = () => {
        setState(intialState)
    }

    return {state ,increment, decrement, reset}
};
