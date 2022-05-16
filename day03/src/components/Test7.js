import React, { useRef } from 'react';

const Test7 = () => {
    //null값이 들어가도되고 안들어가도 됨.
    const idRef = useRef(null)
    const pwRef = useRef()

    const onView = () => {
        const data = {
            id : idRef.current.value,
            pw : pwRef.current.value
        }
        console.log(data)   // {id : '' , pw :''}
    }
    return (
        <div>
           {/* ref 수업용 */}
           <input type="text" ref={idRef}/> 
           <input type="text" ref={pwRef}/>
           <button onClick={onView}>확인</button> 
        </div>
    );
};

export default Test7;