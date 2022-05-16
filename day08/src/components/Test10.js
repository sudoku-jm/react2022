import React, { useReducer } from 'react';

const initalState = 'hotpink'
const reducer = (state, action) => {
    switch(action.type){
        case 'RED' : return 'red'
        case 'BLUE' : return 'blue'
        case 'GREEN' : return 'green'
        case 'YELLOW' : return 'yellow'
        case 'PINK' : return 'pink'
        default : return state
    }
}

const Test10 = () => {
    const [color, dispatch] = useReducer(reducer, initalState)

    return (
        <div>
            <h2 style={{color:color}}>color : {color} </h2>
            <p>
                <button onClick={() => dispatch({type : 'RED'})}>red</button>
                <button onClick={() => dispatch({type : 'BLUE'})}>blue</button>
                <button onClick={() => dispatch({type : 'GREEN'})}>green</button>
                <button onClick={() => dispatch({type : 'YELLOW'})}>yellow</button>
                <button onClick={() => dispatch({type : 'PINK'})}>pink</button>
            </p>
        </div>
    );
};

export default Test10;