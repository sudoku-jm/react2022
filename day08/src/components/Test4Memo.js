import React, { useEffect, useMemo, useState } from 'react';


const user = [
    {id : 1, name : '김태리'},
    {id : 2, name : '김다미'},
    {id : 3, name : 'cat'},
    {id : 4, name : '차학연'},
    {id : 5, name : '정택운'},
    {id : 6, name : '유재석'},
    {id : 7, name : 'naver'},
    {id : 8, name : 'NAVER'},
    {id : 9, name : 'KAKAO'},
    {id : 10, name : 'kakao'},
    {id : 11, name : 'Google'},
]

const Test4Memo = () => {
    const [text, setText] = useState('')
    const [sch, setSch] = useState('')

   
    const onSearch = () => {
        setSch( text )
    }

    const data = useMemo(() => {
        return user.filter( item => item.name.toLowerCase().includes(text) )
    },[sch])

    return (
        <div style={{margin:30}}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4Memo;