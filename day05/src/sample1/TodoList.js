import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ( {data , onDel, onCheck, onToggle} ) => {
    return (
        <div className='TodoList'>

            <ul>
                {
                    data.map( item => <TodoItem key={item.id} item={item} onDel={onDel} onCheck={onCheck} onToggle={onToggle} />)
                }
            </ul>
        </div>
    );
};

export default TodoList;