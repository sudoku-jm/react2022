import React from 'react';
import styles from './TodoList.module.css';


const TodoItem = ({ todo, onDel , onToggle }) => {
    const { id, text , isActive } = todo

    return (
        <li className={ isActive ? styles.on :''}>
           <span onClick={() => onToggle(id)}>&#10003;</span> 
           <em onClick={() => onToggle(id)}> { text } </em>
           <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;