import { useRef, useState } from "react";

const FriendInput = ({onAdd}) => {
    const nameRef = useRef()
    const [form,setForm] = useState({
        // id : 1, name : 'sss', age:20
    })

    const {id,name,age,image} = form

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !age || !image) return false
        onAdd(form)
        setForm({
            name :'',
            age : '',
            image: ''
        })
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit} className="formadd">
            <p>
                <label>이름</label>
                <input type="text" name="name" ref={nameRef} value={name} onChange={changeInput} />
            </p>
            <p>
                <label>나이</label>
                <input type="text" name="age" value={age} onChange={changeInput} />
            </p>
            <p>
                <label>사진</label>
                <input type="text" name="image" value={image} onChange={changeInput} />
            </p>
            <button type="submit">추가</button>
        </form>
    );
};

export default FriendInput;