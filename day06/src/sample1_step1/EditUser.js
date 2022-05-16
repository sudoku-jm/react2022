import React, { useEffect, useState } from 'react';

const EditUser = ({current, onUpdate, setIsEdit}) => {
    const [user, setUser] = useState(current)
    const {name,id, addr} = user
    
    // console.log('current',current)

    //갱신
    useEffect( () => {
        setUser(current)
    },[current])
    //값이 바뀔때마다 state 값도 바꿔준다.

    const changeInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !addr ) return false
        onUpdate(user)
        setUser({name:'', addr:''})
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>내일 출연진 명단수정</h2>
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={changeInput}/>
            </p>
            <p>
                <label>주소</label>
                <input type="text" name="addr" value={addr} onChange={changeInput}/>
            </p>
            <p>
                <button type="submit">수정</button>
                <button onClick={() => setIsEdit(false)}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;