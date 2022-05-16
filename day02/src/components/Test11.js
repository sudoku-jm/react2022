import { useState } from "react";

const Test11 = () => {
    const [isActive , setIsActive] = useState(true)

    const onShow = () => {
        setIsActive(true)
    }
    const onHide = () => {
        setIsActive(false)
    }
    const onToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <button onClick={onShow}>보이기</button>
            <button onClick={onHide}>숨기기</button>
            <button onClick={onToggle}>{isActive ? '숨기기' : '보이기'}</button>
            <div style={{width:300,height:100,margin:20,backgroundColor:'hotpink', display:isActive ? 'block':'none'}}>

            </div>

            <hr/>
            {
                isActive === true ?
                <div style={{width:300,height:100,margin:20,backgroundColor:'hotpink'}}></div>
                : null
            }
            {
                isActive && 
                <div style={{width:300,height:100,margin:20,backgroundColor:'hotpink'}}></div>
            }
        </>
    );
};

export default Test11;