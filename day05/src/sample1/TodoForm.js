import { useRef, useState } from 'react';
import './TodoForm.css'

const TodoForm = ( {onAdd} ) => {

    const textRef = useRef()
    const [text, setText] = useState('')
    const ChangeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return false
        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit} className='TodoForm'>
            <input type="text" placeholder="할일을 입력하세요" value={text} ref={textRef} onChange={ChangeInput}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;