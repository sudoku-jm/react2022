import React, { useRef, useState } from 'react';

const Test2 = () => {
    const no = useRef(1)

    const [data, setData] = useState([]);

    const names = '차학연, 정택운, 이재환, 김원식, 이홍빈, 한상혁, 김다미, 최우식, 유재석, 김희선, 최진우'.split(',')

    //추가 
    const onAdd = () =>{
        const ran = Math.floor(Math.random() * names.length)

        setData([
            ...data,
            {
                id : no.current++,
                text : names[ran] //names의 값을 랜덤으로 
            }
        ])
    }
    return (
        <div>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li> )
                }
            </ul>
        </div>
    );
};

export default Test2;