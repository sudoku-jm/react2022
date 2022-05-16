import React, { useReducer } from 'react';

//초기값
const initialState = 0;

//함수
const reducer = (state , action) => {
    switch(action.type) {
        case 'INCREMENT' : 
            return state + 1
        case 'DECREMENT' : 
            return state - 1
        case 'RESET' : 
            return 0
        default :
            return state
    }
}


const Test9 = () => {
    const [ count, dispatch ] = useReducer(reducer , initialState)


    return (
        <div>
            <h1> 카운트 : {count}</h1>
            <p>
                <button onClick={() => dispatch({type : 'INCREMENT'})}>증가</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}>감소</button>
                <button onClick={() => dispatch({type : 'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test9;