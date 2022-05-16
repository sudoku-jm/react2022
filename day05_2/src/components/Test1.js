import React, { useRef, useState } from 'react';

const Test1 = () => {
    const [data, setData] = useState([
        {id : 1, text:'홍길동'}
    ])

    const no = useRef(1)

    //추가
    const onAdd = () =>{
        setData( data.concat({
            id : no.current++,
            text : '테스트' + Math.floor(Math.random() * 10)
        }) )
    }

    const onAdd2 = () => {
        setData([
            ...data,
            {
                id : no.current++,
                text : '홍길동' + Math.floor(Math.random() * 10)
            }
        ])
    }
    return (
        <>
            <h2>Add</h2>
            <button onClick={onAdd2}>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                       {item.id} / {item.text}
                    </li> )
                }
            </ul>
        </>
    );
};

export default Test1;