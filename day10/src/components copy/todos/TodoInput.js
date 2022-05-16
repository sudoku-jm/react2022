import React from 'react';
import { useTodos } from '../../contexts/TodoContext';

const TodoInput = () => {
    const {changeInput, onAdd, text} = useTodos()

    const onSubmit = (e) => {
        e.preventDefault()
        if( !text ) return
        onAdd(text)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} placeholder="할 일을 입력하세요" onChange={changeInput}/>
            <button>추가</button>
        </form>
    );
};

export default TodoInput;