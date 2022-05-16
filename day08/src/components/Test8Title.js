import React from 'react';

const Test8Title = () => {
    console.log('title')
    return (
        <div>
            <h2>나이와 용돈 관리</h2>
        </div>
    );
};

export default React.memo(Test8Title);