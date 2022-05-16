import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
    const [todo, setTodo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [id, setId] = useState(1)
    // const [text , setText] = useState('')
    // const changeInput = (e) => {
    //     setText(e.target.value)
    //     setId(e.target.value)
    // }

    const [num, setNum] = useState(1)

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`
        axios.get(url)
            .then( res => {
                setTodo(res.data)
                setLoading(false)
                setError(null)
            })
            .catch( error => {
                setTodo({})
                setLoading(true)
                setError('에러가 발생했습니다.')
            })
    },[num])//num값이 바뀌었을 때 호출.

    return (
        <div>
            <p>
                {/* <input type="text" value={text} onChange={changeInput}/> */}
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <button onClick={() => setNum(id)}>검색</button>
            </p>
            {
               todo && loading ? <h2>로딩중</h2> : 
                <h3> {todo.id} / {todo.title} </h3>
            }
            <h3>{error ? error : null}</h3>
        </div>
    );
};

export default Test4;