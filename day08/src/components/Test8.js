import React, { useCallback, useState } from 'react';
import Test8Count from './Test8Count';
import Test8Title from './Test8Title';

const Test8 = () => {
    const [age, setAge] = useState(20)
    const [money, setMoney] = useState(10000)

    const onAge = useCallback(() => {
        setAge( age + 1)
    },[age])

    const onMoney = useCallback(() => {
        setMoney(money + 1)
    },[money])

    return (
        <div>
            <Test8Title/>
            
            <Test8Count text="나이" count={age}/>
            <button onClick={onAge}>나이 증가</button>

            <hr/>

            <Test8Count text="용돈" count={money}/>
            <button onClick={onMoney}>용돈 증가</button>
        </div>
    );
};

export default Test8;