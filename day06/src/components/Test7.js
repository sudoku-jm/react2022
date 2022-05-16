import React, { useEffect, useRef, useState } from 'react';

const Test7 = () => {
    
    const [text,setText] = useState([])
    const [data,setData] = useState([])
    const no = useRef(data.length + 1)

    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            setData(data);
        }
    }, []);
    
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))
    },[data]) 
    



    /* ========================================== */

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }



    const onAdd = () => {
        if(!text) return false
        setData([
            ...data,
            {
                id : no.current++,
                text
            }
        ])
        setText('')
    }
    

    const onDel = (id) => {
        setData(data.filter( item => item.id !== id))
    }



    return (
        <div>
            {/* <h1>카운트 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={onRemove}>삭제</button>
                <button onClick={onClear}>모두삭제</button>
            </p> */}
            {/* <hr/> */}
            <input type="text" value={text} onChange={changeInput}/>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                        <button onClick={() => onDel(item.id)}>삭제</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test7;