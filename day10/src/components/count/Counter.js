import React from 'react';
import { useCounter } from '../../contexts/ChangeCounterContext';
import { useUserToggle } from '../../contexts/ToggleContext';

const Counter = () => {
    const {userStore, userDispatch} = useCounter()
    const {state, dispatch} = useUserToggle()
    return (
        <div>
            <h1>카운터 : {userStore.count}</h1>
            <h2 style={{color : state.isChk ? 'tomato' : 'black'}}>{`토글 : ${ state.isChk } `}</h2>
            <p>
                <button onClick={() => userDispatch({type : 'INCREMENT'})}>증가</button>
                <button onClick={() => userDispatch({type : 'DECREMENT'})}>감소</button>
                <button onClick={() => userDispatch({type : 'RESET'})}>초기화</button>
            </p>
            <p>
                <button onClick={() => dispatch({type : 'TOGGLE'})}>toggle</button>
                <button onClick={() => dispatch({type : 'TRUE'})}>true</button>
                <button onClick={() => dispatch({type : 'FALSE'})}>false</button>
            </p>
        </div>
    );
};

export default Counter;