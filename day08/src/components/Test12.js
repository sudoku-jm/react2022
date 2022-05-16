import React, { useReducer } from 'react';

const initalState = {
    color : 'hotpink'
}

const reducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_COLOR' : 
            return{
                color : action.step
            }
        default : 
            return state
    }
}

const Test12 = () => {
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h2 style={{color:state.color}}>color : {state.color} </h2>
            <p>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR', step:'red'})}>red</button>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR', step:'blue'})}>blue</button>
                <button onClick={() => dispatch({type : 'CHANGE_COLOR', step:'green'})}>green</button>
            </p>
        </div>
    );
};

export default Test12;