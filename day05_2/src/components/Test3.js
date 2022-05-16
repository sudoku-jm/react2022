import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        name : '',
        age : ''
    })    //객체

    //비구조할당
    const {name, age} = form

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const no = useRef(1)
    const nameRef = useRef()

    const onAdd = (e) => {
        e.preventDefault();
        if(!name || !age) return false
        setData([
            ...data,
            {
                id : no.current++,
                name,
                age
            }
        ])
        setForm({
            name :'',
            age : ''
        })
        nameRef.current.focus()
    }

    return (
        <div>
            <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef}/>
            <input type="text" name="age" value={age} onChange={changeInput}/>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.name} / {item.age}
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Test3;