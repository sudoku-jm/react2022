import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const [isShow, setIsShow] = useState(false)

    const onToggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <p>
                <button onClick={onToggle}>
                    {
                        isShow ? '숨기기' : '보이기'
                    }
                </button>
            </p>
            <hr/>
            {
                isShow &&
                    <Test1Sub/>
            }
        </div>
    );
};

export default Test1;