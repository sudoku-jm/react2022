import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, changeText } from '../../store/modules/todos';

const TodoInput = () => {
    const text = useSelector(state => state.todoReducer.text)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) return
        console.log(text)
        dispatch(add(text))
        dispatch(changeText(''))
        
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e) => dispatch( changeText(e.target.value) )} placeholder="할 일을 입력하세요" />
            <button>추가</button>
        </form>
    );
};

export default TodoInput;