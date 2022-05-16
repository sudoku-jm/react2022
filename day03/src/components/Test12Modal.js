import React from 'react';

const Test12Modal = ({setIsOpen}) => {
    return (
        <>
            <div className="bg"></div>
            <div className="popup">
                {/* <p className="closex" onClick={onClose}>X</p> */}
                <p className="closex" onClick={() => setIsOpen(false)}>X</p>
                <h2>팝업 띄우기</h2>
            </div>
        </>
    );
};

export default Test12Modal;