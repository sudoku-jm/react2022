import { useRef, useState } from "react";

const Test3 = () => {
    const idRef = useRef()
    const no = useRef(1)
    const [text,setText] = useState('')
    const [data,setData] = useState([
        // {id : 1, text : 'xxx'}
    ])

    const inputChange = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id : no.current++,
                text
            }
        ])

        setText('')
        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" value={text} onChange={inputChange} ref={idRef}/>
            <button onClick={onAdd}>추가</button>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;