import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { black, blue, green, red } from '../../store/modules/color';

const Color = () => {
    const color = useSelector(state => state.colorA.color)
    //state.리듀서파일명.initalState에서보내는 state
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => dispatch( red() )}>red</button>
                <button onClick={() => dispatch( blue() )}>blue</button>
                <button onClick={() => dispatch( green() )}>green</button>
                <button onClick={() => dispatch( black() )}>black</button>
            </p>
        </div>
    );
};

export default Color;