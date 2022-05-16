import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    const {color, onColor} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => onColor('red')}>red</button>
                <button onClick={() => onColor('green')}>green</button>
                <button onClick={() => onColor('blue')}>blue</button>
                <button onClick={() => onColor('yellow')}>yellow</button>
            </p>
        </div>
    );
};

export default Color;