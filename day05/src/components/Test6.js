import React, { useEffect, useRef, useState } from 'react';

const Test6 = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const [count,setCount] = useState(1)

    const onColor = () => {
        setCount( count + 1 )
        ref1.current.style.backgroundColor ='pink' 
        ref2.current.style.backgroundColor ='hotpink' 
    }

    //화면에 그려진 후 실행
    useEffect( () => {
        console.log('useEffect')
        ref1.current.style.backgroundColor = 'skyblue'
        ref2.current.style.backgroundColor = 'tomato'
    })
    //버튼 눌리고 렌더링 될 때마다 계속 실행된다.(거의 안씀)

    return (
        <div>
            <h2>Hooks : useEffect 형식1</h2>
            <h1> 카운트 : {count}</h1>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}> 결과입니다 </h2>
            <button onClick={onColor}>컬러+숫자</button>
        </div>
    );
};

export default Test6;