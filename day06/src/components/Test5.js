import React, { useState } from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    const [isActive , setIsActive] = useState(false)

    const onToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <button onClick={onToggle}>{isActive ? '숨기기' : '보이기'}</button>
            <hr/>
            {
                isActive && <Test5Sub isActive={isActive}/>
            }
        </div>
    );
};

export default Test5;