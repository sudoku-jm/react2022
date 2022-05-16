import React, { useState } from 'react';

const Question2 = () => {
    const [text , setText] = useState('')
    const [isActive, setIsActive] = useState(true)

    const changeInput = (e) => {
        const {value, name} = e.target
        setText({
            ...text,
            [name] : value
        })

        if(text.password != undefined){
            if(text.password.length > 5){
                setIsActive(false)
            }else{
                setIsActive(true)
            }
        }

    }


    const onLogin = () => {
        
    }

    return (
        <div>
            {/* 
            
                1. 2개의 input(name="username", name="password")를 만들고, setState와, onChange를 이용하여 입력된 값들을 관리하기

                2. input의 type을 "password"로 설정하면 암호 입력칸을 만들기

                3. button의 ​disabled 속성을 이용하면 버튼의 활성화 여부를 결정

            */}
            <input type="text" name="username"  onChange={changeInput}/>
            <input type="password" name="password"  onChange={changeInput}/>
            <button onClick={onLogin} disabled={isActive}>로그인</button>
        </div>
    );
};

export default Question2;