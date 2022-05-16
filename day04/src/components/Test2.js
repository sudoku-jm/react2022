import React, { useState } from 'react';
import Test2Ani from './Test2Ani';
import Test2Display from './Test2Display';
import Test2Name from './Test2Name';

const Test2 = () => {
    const [text, setText] = useState('정이안');
    const [ani, setAni] = useState('강아지')

    const onName = (e) => {
        const {value } = e.target
        setText(value)
    }
    const onAni = (e) => {
        const {value } = e.target
        setAni(value)
    }

    return (
        <div>
            <Test2Name text={text} onName={onName}/>
            <hr/>
            <Test2Ani ani={ani} onAni={onAni}/>
            <hr/>
            <Test2Display text={text} ani={ani}/>
        </div>
    );
};

export default Test2;