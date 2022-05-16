import React from 'react';
import { useCounter } from '../hooks/useCounter';
//useCounter 사용자정의 훅을 불러옴. 함수지만 훅처럼 쓸 수 있다.

const Test15 = () => {
    const {state, increment, decrement, reset} = useCounter()
    return (
        <div>
            <h2>사용자 정의 훅</h2>
            <h1>카운트 : {state}</h1>
            <p>
                <button onClick={() => increment()}>증가</button>
                <button onClick={() => decrement()}>감소</button>
                <button onClick={() => reset()}>초기화</button>
            </p>
        </div>
    );
};

export default Test15;