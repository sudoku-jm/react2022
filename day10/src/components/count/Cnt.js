import React, { useContext } from 'react';
import { CntContext } from '../../contexts/CntContext';

const Cnt = () => {
    const {cnt, increment, decrement} = useContext(CntContext)
    return (
        <div>
            <h1>카운트 변경 : {cnt}</h1>
            <p>
                <button onClick={() => increment(10)}>10증가</button>
                <button onClick={() => increment(20)}>20증가</button>
                <button onClick={() => decrement(5)}>5감소</button>
                <button onClick={() => decrement(15)}>15감소</button>
            </p>
        </div>
    );
};

export default Cnt;