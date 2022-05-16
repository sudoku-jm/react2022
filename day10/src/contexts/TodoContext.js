import React, { createContext, useContext, useMemo, useRef, useState } from 'react';

const TodoContext = createContext()
export const useTodos = () => useContext(TodoContext)

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {id : 1, text : '김태리', isChk : false},
        {id : 2, text : '김다미', isChk : false},
        {id : 3, text : '송혜교', isChk : true},
        {id : 4, text : '송중기', isChk : true},
        {id : 5, text : '김도현', isChk : false},
    ])

    const [text, setText] = useState('')
    const no = useRef(todos.length + 1)
    

    //추가
    const onAdd = (e) => {
        setTodos([
            ...todos,
            {
                id : no.current++,
                text : text,
                isChk : false
            }
        ])
        setText('')
    }

    //글자변경
    const changeInput = (e) => {
        // const {value} = e.target 
        setText(e.target.value)
    }

    //삭제
    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    //체크
    const onToggle = (id) => {
        const newData = todos.map( todo => todo.id === id ? {...todo, isChk : !todo.isChk} : todo)
        setTodos(newData)
    }

    const value = useMemo( () => ({todos, onDel, onToggle, changeInput, onAdd, text}) ,[todos, onDel, onToggle,changeInput, onAdd, text])

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;