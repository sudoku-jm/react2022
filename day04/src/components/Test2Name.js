import React from 'react';

const Test2Name = ({text, onName}) => {
    return (
        <div>
            <h2>Name</h2>
            <label>이름 :</label>
            <input type="text" value={text} name="myName" onChange={onName}/>
            <span>{text}</span>
        </div>
    );
};

export default Test2Name;