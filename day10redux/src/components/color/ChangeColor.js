import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/modules/changecolor';

const ChangeColor = () => {
    const color = useSelector(state => state.changeColor.color)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{color}}>컬러 변경 : {color}</h1>
            <p>
                <button onClick={() => dispatch( changeColor('pink') )}>pink</button>
                <button onClick={() => dispatch( changeColor('orange') )}>orange</button>
                <button onClick={() => dispatch( changeColor('lime') )}>lime</button>
            </p>
        </div>
    );
};

export default ChangeColor;