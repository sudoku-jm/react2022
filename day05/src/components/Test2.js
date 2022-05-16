import React, { useRef, useState } from 'react';

const Test2 = () => {
    //고유번호 처리
    //dom을 처리할 수 있지만 값을 유지할 수도 있다
    const no = useRef(1)    //초기값

    const [data, setData] = useState([]);
    const names = '차학연, 정택운, 이재환, 김원식, 이홍빈, 한상혁, 김다미, 최우식, 유재석, 김희선, 최진우'.split(',')

   
    
    //추가
    const onAdd = () => {
        const ran = Math.floor( Math.random() * names.length )
        setData([
            ...data,
            {
                id : no.current++,
                text : names[ran]
            }
        ])
    }

    return (
        <div>
            <button onClick={ onAdd }>추가</button>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;