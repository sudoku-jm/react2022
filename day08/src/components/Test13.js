import React, { useReducer } from 'react';

const initalState = {
    width:150
}

const reducer = (state, action) => {
    switch(action.type){
        case 'PLUS' :
            return {
                width : state.width + action.step
            }
        case 'MINUS' : 
            return {
                width: state.width <= 0 ? 0 : state.width - action.step
            }
        case 'RESET' : 
            return {
                width: action.step
            }
        default :
            return state
    }
}

const Test13 = () => {

    const [state, dispatch] = useReducer(reducer,initalState)

    return (
        <div>
            {
                console.log('state.width',state.width)
            }
            <div style={{
                width:state.width,
                height:100,
                background:'hotpink',
                transition: '0.5s'
            }}></div>
            <p>
                <button onClick={() => dispatch({type : 'PLUS', step : 50})}>50씩 증가</button>
                <button onClick={() => dispatch({type : 'MINUS', step : 30})}>30씩 감소</button>
                <button onClick={() => dispatch({type : 'RESET', step : 0})}>초기화</button>
            </p>
        </div>
    );
};

export default Test13;