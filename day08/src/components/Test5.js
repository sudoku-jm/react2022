import React, { useCallback, useState } from 'react';

const Test5 = () => {
    const [count, setCount] = useState(1)
    
    const ran = Math.random()
    // console.log('Test5 : ',ran)

    //useCallBack : 함수가 한 번 만들어지면 끝!
    const increment = useCallback(() =>{
        console.log(ran)
        // setCount( prev => prev + 1 ) 
        setCount( count + 1 ) 
    },[count]) //의존성이 바뀔 때 마다 함수를 다시 그려서 실행

    const decrement = useCallback(() =>{
        console.log(ran)
        setCount(prev => prev - 1 )
    },[])
    // 잘 안쓰는 함수때문에 필요이상으로 작업이 이루어 지므로 useCallback 붙여주는게 좋다.

    return (
        <div>
            <h2> 카운트 : {count}</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Test5;