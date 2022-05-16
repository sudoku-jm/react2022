import React, { useEffect, useState } from 'react';

const Test3 = () => {
    const [text, setText] = useState('')
    const [count, setCount] = useState(1)

    const changeInput = (e) => {
        const {value} = e.target
        setText(Number(value))
    }


    //형식3) mount / update : 의존값 - state, 특정 props
    //형식4) mount / update : 의존값 - state, 특정 props
    useEffect( () => {
       console.log('useEffect')
       const timer = setInterval(()=>{
           setCount( prevCnt => prevCnt + text )
        },1000)
        
        return() => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[text])
    //특정 state,props 값이 바뀔 때마다 useEffect 실행

    return (
        <div>
            <p>
                숫자간격 : 
                <input type="text" value={text} onChange={changeInput} />
            </p>
            <h2>입력한 값만큼 1초 마다 증가 : {count}</h2>
        </div>
    );
};

export default Test3;