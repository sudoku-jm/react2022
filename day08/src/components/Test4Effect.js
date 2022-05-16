import React, { useEffect, useState } from 'react';


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

const Test4Effect = () => {
    const [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [sch, setSch] = useState('')

    //한글 - sql초성검사로 해결해줘야한다.
    // useEffect(() => {
    //     //대소문자 구분 안하고 찾기 : 모두 소문자로 바꾼 뒤 비교.
    //     setData( user.filter(item => item.name.toLowerCase().indexOf( text.toLowerCase() ) != -1 ))
    // },[text])


    //실시간 검색 : useEffect가 좋다

    useEffect(() => {
        //글자가 포함되어 있는지 includes도 사용
        setData( 
            user.filter( item => item.name.toLowerCase().includes( text.toLowerCase() )) 
        )
    },[sch])
    
    const onSearch = () => {
        setSch( text )
    }



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

export default Test4Effect;