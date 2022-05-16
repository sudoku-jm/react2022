import { useState } from 'react';
import './Test2.css';
const Test2 = () => {
    const [active,setActive] = useState(false)

    const onAdd = () => {
        setActive(true)
    }
    const onRemove = () => {
        setActive(false)
    }
    const onToggle = () => {
        setActive(!active)
    }

    return (
        <div className="wrap">
            <p className="on">오늘은 일요일입니다.</p>
            <p className="on1">오늘은 일요일입니다.</p>
            <p className="test on">오늘은 일요일입니다.</p>
            <hr/>
            <p className={active && 'on'}>오늘은 일요일입니다.</p>
            <p className={active && 'on1'}>오늘은 일요일입니다.</p>
            <p className={active ? 'test on' : 'test'}>오늘은 일요일입니다.</p>
            <p className={`test ${active && 'on'}`}>오늘은 일요일입니다.</p>
            <div>
                <button onClick={onAdd}>classList.add</button>
                <button onClick={onRemove}>classList.remove</button>
                <button onClick={onToggle}>classList.toggle</button>
            </div>
        </div>
    );
};

export default Test2;