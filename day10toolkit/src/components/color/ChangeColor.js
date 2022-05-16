import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeColor from '../../store/modules/changeColor';

const ChangeColor = () => {
    const color = useSelector(state => state.changeColor.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>컬러변경 : {color}</h1>
            <p>
                <button onClick={() => dispatch( changeColor('red'))}>red</button>
                <button onClick={() => dispatch( changeColor('green'))}>green</button>
                <button onClick={() => dispatch( changeColor('blue'))}>blue</button>
            </p>
        </div>
    );
};

export default ChangeColor;