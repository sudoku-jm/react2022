import React, { useRef, useState } from 'react';

const AddUser = ({onAdd}) => {
    const [form , setForm] = useState({
        name:'',
        addr: ''
    })

    const nameRef = useRef()

    const {name, addr} = form

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })

    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !addr) return false
        onAdd(form)
        setForm({name:'', addr:''})
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>내일 출연진 명단추가</h2>
            <p>
                <label>이름</label>
                <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
                <label>주소</label>
                <input type="text" name="addr" value={addr} onChange={changeInput}/>
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default AddUser;