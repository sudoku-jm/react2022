import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = ({}) => {
    //context에서 export 시킨 ChangeColorContext 가져온다
    const {color, onColor} = useContext(ChangeColorContext)
    return (
        <div>
            <h1 style={{color}}>컬러변경 : {color}</h1>
            <p>
                <button onClick={() => onColor('red')}>red</button>
                <button onClick={() => onColor('green')}>green</button>
                <button onClick={() => onColor('blue')}>blue</button>
                <button onClick={() => onColor('yellow')}>yellow</button>
                <button onClick={() => onColor('black')}>black</button>
            </p>
        </div>
    );
};

export default ChangeColor;