import React from 'react';
import { useTodos } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const {todos} = useTodos()
    return (
        <div>
            <h2>할 일 내용</h2>
            <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            }
            </ul>
        </div>
    );
};

export default TodoList;