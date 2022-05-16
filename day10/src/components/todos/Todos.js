import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import { CountContext } from '../../contexts/CountContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    const {color} = useContext(ColorContext)
    const {count} = useContext(CountContext)
    return (
        <div>
            <h1 style={{color:color}}>할 일 만들기 {count}</h1>
            <TodoInput/>
            <TodoList/>
        </div>
    );
};

export default Todos;