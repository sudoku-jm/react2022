import Test12Modal from './Test12Modal';
import '../assets/css/reset.css';
import './Test12.css';
import { useState } from 'react';

const Test12 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={onOpen}>팝업 띄우기</button>
            {
                isOpen &&
                // <Test12Modal onClose={onClose} />
                <Test12Modal setIsOpen={setIsOpen}/>
            }
        </div>
    );
};

export default Test12;