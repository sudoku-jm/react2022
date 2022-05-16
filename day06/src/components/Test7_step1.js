import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [count ,setCount] = useState(0)

    //값을 바꿀 때마다 로컬스토리지에 값을 저장하고싶을 경우?
    /* 
    - 로컬스토리지는 텍스트형태로밖에 저장하지 못한다 
        객체 -> 문자 : JSON.stringify(저장)
        문자 -> 객체 : JSON.parse(불러와서 사용)
    */

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('count'))
        // console.log('count',count)
        if(count){
            setCount(count)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count))
    },[count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    const onRemove = () => {
        //로컬스토리지 아이템 삭제
        localStorage.removeItem('count')
    }


    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={onRemove}>삭제</button>
            </p>
        </div>
    );
};

export default Test7;