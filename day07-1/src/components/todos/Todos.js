import React, { useEffect, useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './Todos.module.css';

const Todos = () => {
    const [ data , setData ] = useState([])   
    
    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todoList'))
        if(todoList){
            setData(todoList)
        }
    },[])
    useEffect(() => {
        localStorage.setItem('todoList',JSON.stringify(data))
    },[data])
    
    const no = useRef(data.length + 1)
    const onDel = (id) => {
        setData( data.filter( todo => todo.id !== id ))
    }  
    const onAdd = ( text )  => {
      setData([
          ...data ,
          {
              id: no.current++ ,
              text ,
              isActive: false 
          }
      ])
    }    
    const onToggle = ( id )  => {
      setData( data.map( todo => todo.id === id ? { ...todo , isActive: !todo.isActive } : todo ))
    }


    return (
        <div className={styles.Todos}>
            <h1>일정관리앱</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;