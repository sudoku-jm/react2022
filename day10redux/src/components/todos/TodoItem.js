import React from 'react';
import { useDispatch } from 'react-redux';
import { del } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const {id, text} = todo
    const dispatch = useDispatch()
    return (
        <li>
            {id} / {text}
            <button onClick={() => dispatch(del(id)) }>삭제</button>
        </li>
    );
};

export default TodoItem;