import React, { useEffect, useRef, useState } from 'react';

const Test7 = () => {
    const [count ,setCount] = useState(0)
    const [text,setText] = useState('')
    const [data,setData] = useState([])

    //값을 바꿀 때마다 로컬스토리지에 값을 저장하고싶을 경우?
    /* 
    - 로컬스토리지는 텍스트형태로밖에 저장하지 못한다 
        객체 -> 문자 : JSON.stringify(저장)
        문자 -> 객체 : JSON.parse(불러와서 사용)
    */

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('count'))
        // console.log('count',count)
        if(count){
            setCount(count)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('count',JSON.stringify(count))
    },[count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    const onRemove = () => {
        //로컬스토리지 아이템 삭제
        localStorage.removeItem('count')
    }


    /* ========================================== */

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const no = useRef(1)

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
    
    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(data))
    },[data])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        console.log('data',data)
        if(data){
            setData(data)
        }
    },[])
    
    const onDel = (id) => {
        setData(data.filter( item => item.id !== id))
    }


    const onClear = () => {
        setData([])
    }

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={onRemove}>삭제</button>
                <button onClick={onClear}>모두삭제</button>
            </p>
            <hr/>
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