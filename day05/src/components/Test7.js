import React, { useEffect, useRef } from 'react';

const Test7 = () => {
    const ref1 = useRef()

    //화면에 그려진 후 한번만
    useEffect( () => {
        ref1.current.focus()    //처음부터 input박스에 커서가 가있음.
    },[])

    return (
        <div>
            <input type="text" ref={ref1}/>
        </div>
    );
};

export default Test7;