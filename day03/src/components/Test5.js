import React, { useState } from 'react';
import './Test5.css';

const Test5 = () => {
    const [bgActive , setBgActive] = useState(true)
    const [age, setAge] = useState(20)

    const onChangeBg = () => {
        setBgActive(!bgActive)
    }

    //증가
    const onChangeAgeUp = () => {
        setAge(age + 1)
    }
    //감소 - 인라인 스타일로 작성
    
    return (
        <div className={`wrap ${bgActive ? 'pink' : 'tomato'}`}>
            <h2>backgroundColor :  {bgActive ? 'pink' : 'tomato'} </h2>
            <h2>나이 : {age} </h2>
            <p>
                <button onClick={onChangeBg}>배경바꾸기:{bgActive ? 'true' : 'false'}  </button>
                <button onClick={onChangeAgeUp}>증가</button>
                <button onClick={() => setAge(age - 1)}>감소</button>
            </p>
        </div>
    );
};

export default Test5;