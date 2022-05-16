import React from 'react';

const Test4 = () => {

    //event, evt, e
    const onTest = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
    }

    return (
        <div>
            <button onClick={ onTest }>
                <span>안녕하세요 누르세요</span>
                <br/>
                <br/>
                <b>일요일 입니다.</b>
            </button>
        </div>
    );
};

export default Test4;