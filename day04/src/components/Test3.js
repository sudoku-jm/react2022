import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [form , setForm] = useState({
        userid : '',
        userpw : '',
        userEmail : ''
    })

    const idRef = useRef(null)

    //비구조할당
    const { userid, userpw, userEmail } = form

    const changeInput = (e) => {
        const {value , name} = e.target
        setForm({
            ...form, //스프레드 연산자로 form의 key값 들고온다.
            [name] : value
        })
    }

    //초기화
    const onReset = () => {
        setForm({
            userid : '',
            userpw : '',
            userEmail : ''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" name="userid" value={userid} onChange={changeInput} ref={idRef}/>
            <input type="text"  name="userpw" value={userpw} onChange={changeInput}/>
            <input type="text" name="userEmail" value={userEmail} onChange={changeInput}/>
            <button onClick={onReset}>초기화</button>

            <hr/>

            <p>아이디 : {userid}</p>
            <p>비밀번호 : {userpw}</p>
            <p>이메일 : {userEmail}</p>
        </div>
    );
};

export default Test3;