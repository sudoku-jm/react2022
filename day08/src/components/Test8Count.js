import React, { memo } from 'react';

const Test8Count = memo(({text, count}) => {
    
    console.log(text, count)

    return (
        <div>
            <h2>{text} : {count}</h2>
        </div>
    );
});

export default Test8Count;