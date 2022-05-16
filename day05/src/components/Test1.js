import React, { useState } from 'react';

const Test1 = () => {
    const [data,setData] = useState([
        // {id:1, text:'홍길동'},
    ])

    //추가
    const onAdd1 = () => {   
        setData( data.concat({
            id:data.length,         //실제 작업 시 중간에 삭제가 되면 length를 쓰지 않는다.
            text : '홍길동' + Math.floor( Math.random() * 10 )
        }) )
    }

    const onAdd = () => {   
        setData([
            ...data,
            {
                id : data.length,
                text : '김다미' + Math.floor( Math.random() * 10 )
            }
        ])
    }


    return (
        <div>
            <h2>데이터추가</h2>
            <button onClick={ onAdd }>추가</button>
            <hr/>
            <ul>
                {
                    data.map( (item, index) => <li key={index}>
                        {item.id} / {item.text} / index : {index}
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Test1;