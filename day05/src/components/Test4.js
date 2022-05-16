import React, { useRef, useState } from 'react';

const Test4 = () => {
    const textRef = useRef()
    const no = useRef(1)
    const [data,setData] = useState([
        // {id : 1 , text:'xxx' , age : 20}
    ])

    const [form , setForm] = useState({
        text : '', age :''
    })

    const {text, age} = form

    const ChangeInput = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
            //form.text = value
            //form.age = value
            //form['text'] = value
            //form['age'] = value
        })
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id : no.current++,
                text,
                age
            }
        ])
        setForm({
            text:'',
            age:''
        })
        textRef.current.focus()
    }

    return (
        <div>
            <input type="text" name="text" value={text} onChange={ChangeInput} ref={textRef}/>
            <input type="text" name="age" value={age} onChange={ChangeInput}/>
            <button onClick={onAdd}>추가</button>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;