import { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const [data, setData] = useState([
        // {id : 1, text: '친구와 만나기'},
        // {id : 2, text: '청소하기'},
        // {id : 3, text: '빨래하기'},
    ])

    const no = useRef(1)

    //삭제
    const onDel = (id) => {
        setData( data.filter( item => item.id !== id ))
    }

    // 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id : no.current++,
                text,
            }
        ])
    }

    //todo체크
    const onToggle = (id) => {
        setData( data.map(item => item.id === id ? {
            ...item,
            isChk : !item.isChk
        } : item) )
    }

    return (
        <div className='Todos'>
            <h1>TodoList</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;