import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()
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