import React, { useReducer } from 'react';

const initalState = 0;
const reducer = (state,action) => {
    switch(action.type){
        case 'INCREMENT' : return state + action.step
        case 'DECREMENT' : return state - action.step
        default : return state
    }
}

const Test11 = () => {
    const [cnt, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h1>카운트 : {cnt}</h1>
            <p>
                <button onClick={() => dispatch({type:'INCREMENT', step : 10})}>10씩 증가</button>
                <button onClick={() => dispatch({type:'DECREMENT' , step : 20})}>20씩 감소</button>
            </p>
        </div>
    );
};

export default Test11;