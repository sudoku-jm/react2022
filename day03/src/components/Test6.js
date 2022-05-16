import React, { useRef, useState } from 'react';

const Test6 = () => {
    const [userid , setUserid] = useState('')
    const [userpw , setUserpw] = useState('')
    const idRef = useRef(null)

    //event , evt , e
    const changeInput1 = (e) => {
        // setUserid(e.target.value)
        const { value } = e.target  //비구조할당해서도 쓸 수 있다.
        //value, name등 비구조할당 가능.
        // {data} 를 props로 받아 data.id , id.name 처럼 안쓰고 비구조 할당 하듯이.
        setUserid(value)
    }
    const changeInput2 = (e) => {
        // setUserpw(e.target.value)
        const { value } = e.target
        setUserpw(value) 
    }

    //초기화
    const onReset = () => {
        setUserid('')
        setUserpw('')
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" value={userid} ref={idRef} onChange={changeInput1}/>
            <input type="text"value={userpw} onChange={changeInput2}/>
            <button onClick={onReset} >초기화</button>
            <h2>
                id : {userid}/ pw : {userpw}
            </h2>
        </div>
    );
};

export default Test6;