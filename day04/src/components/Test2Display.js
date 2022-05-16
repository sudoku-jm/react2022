import React from 'react';

const Test2Display = ( {text , ani} ) => {
    return (
        <div>
            <h2>Display</h2>
            <p>{text}이/가 좋아하는 동물은 {ani}입니다.</p>
        </div>
    );
};

export default Test2Display;