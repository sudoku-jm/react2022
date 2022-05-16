import React, { useState } from 'react';

const Test11 = () => {
    const [isChk , setIsChk] = useState(false)
    const onChk = (e) => {
        const {checked} = e.target
        setIsChk(checked)
        console.log(checked)//true ,false
    }
    return (
        <div style={{margin:20}}>
            <p>
                <input type="checkbox" onChange={onChk} />
                {isChk ? '숨기기' : '보이기'}
            </p>
            {
                isChk &&
                <div style={{width:200,height:100,background:'hotpink'}}></div>
            }

        </div>
    );
};

export default Test11;