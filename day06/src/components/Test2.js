import React, { useEffect, useState } from 'react';

const Test2 = () => {
    const [ count , setCount ] = useState(1)

    useEffect( () => {
        console.log('useEffect')
        const timer = setInterval( () => {
            console.log( 'interval' )
            //한 번만 실행하기 때문에 useEffect 외부의 count 변수에 값은 1번만 전달.
            // setCount( count + 1 )
            
            // setCount( 이전값매개변수 => 이전값매개변수 + 1)
            //cnt : 변수 count의 상태값
            setCount( cnt => cnt + 1)

            //자식컴포넌트로 처리하는 경우가 많아서 시간이 나오면 뒷정리를 꼭 한다.
            return() => {
                console.log('뒷정리')
                clearInterval(timer)
            }
            
        },1000)
    },[])

    return (
        <div>
            <h1>카운트 : {count}</h1>
        </div>
    );
};

export default Test2;