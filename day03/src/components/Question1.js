import React, { useRef, useState } from 'react';

const Question1 = () => {
    const [chkid, setChkid] = useState('')
    const [chkpw, setChkpw] = useState('')
    const idRef = useRef()

    const changeInput1 = (e) => {
        const {value} = e.target
        setChkid(value)
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setChkpw(value)
    }

    const onLogin = () => {
        if(chkpw.length >= 6){
            setChkid('')
            setChkpw('')
            idRef.current.focus()
        }else{
            alert('비밀번호 6자리 이상쓰세요')
        }
    }

    return (
        <div>
            {/* 
            username과 password를 입력받고, 
            실제 회원가입처럼 
            1. 비밀번호가 안전(길이가 6 이상)할 때에만 버튼이 클릭 가능하게끔 하고자 합니다. 버튼의 경우, 클릭되었을 때 별다른 작동을 하지 않아도 되요
            */}
            <input type="text" name="id" value={chkid} ref={idRef} onChange={changeInput1}/>
            <input type="password" name="pw" value={chkpw} onChange={changeInput2}/>
            {/* {
                chkpw.length > 6 ?
                <button onClick={onLogin}>로그인</button>
                :
                <button onClick={onLogin} disabled>로그인</button>
            } */}
            {
                <button onClick={onLogin} disabled={chkpw.length < 6}>로그인</button>

            }
        </div>
    );
};

export default Question1;