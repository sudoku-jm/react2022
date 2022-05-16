import React, { useState } from 'react';

const Test9 = () => {
    const [color,setColor] = useState('black')
    const [text,setText] = useState('red')
    const onChkColor = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onView = () => {
        setColor(text)
        
    }
    return (
        <div>
            {/* ref 안쓰고 구현방법 */}
            <h2 style={{fontSize : 50, color:color}}>컬러 바꾸기</h2>
             <select onChange={onChkColor}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="pink">pink</option>
            </select> 
            <button onClick={onView}>선택</button>
        </div>
    );
};

export default Test9;