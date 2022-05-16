import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green, red } from '../../store/modules/color';

const Color = () => {
    const color = useSelector(state => state.colorPage.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => dispatch( red() )}>red</button>
                <button onClick={() => dispatch( green() )}>green</button>
                <button onClick={() => dispatch( blue() )}>blue</button>
            </p>
        </div>
    );
};

export default Color;