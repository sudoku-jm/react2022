import React, { useState } from 'react';

const Test5 = () => {
    const datalist = [
        {id:1, name:'김태리'},
        {id:2, name:'김다미'},
        {id:3, name:'최우식'},
        {id:4, name:'김진주'},
        {id:5, name:'김도윤'},
    ]
    const [data,setData] = useState(datalist)


    //삭제
    const onDel1 = () => {
        setData(data.filter(item => item.name !=='김도윤'))
    }
    const onDel2 = () => {
        setData(data.filter(item => item.id !== 3))
    }
    const onDel3 = (num) => {
        // alert(num)
        setData(data.filter(item => item.id !== num))
    }
    const onDel4 = (id) => {
        setData(data.filter( item => item.id !== id))
    }


    //추가
    const onAdd1 = () => {
        setData(data.concat({id : 6, name :'유재석'}))
    }
    const onAdd2 = () => {
        setData([   
            //기존 배열에 
            //...data 기존 데이터 추가 후 , 추가 데이터 추가.
            ...data,
            {
                id : 7,
                name : '김혜수'
            }
        ])
    }
    const onAdd3 = (name) => {
        setData([
            ...data,
            {
                id : 8,
                // name : name 
                name
            }
        ])
    }


    //수정
    const onMode1 = () => {
        setData( data.map( item => {
            if(item.id ===5 ){
                return{
                     ...item,
                     name : '김우식'
                }
            }else{
                return item
            }
        }))
    }
    const onMode2 = () => {
        setData( data.map( item =>item.id === 4 ? {
            ...item,
            name : '전지현'
        } : item) )
    }
    const onMode3 = (id) => {
        setData( data.map( item => item.id === id ? {
            ...item,
            name : '차학연'
        }:item ) )
    }
    
    return (
        <div>
            <p>
                <button onClick={onDel1}>5삭제 filter name</button>
                <button onClick={onDel2}>3삭제 filter id</button>
                <button onClick={() => onDel3(1)}>1삭제(num)</button>
                <button onClick={() => onDel4(4)}>4삭제(num)</button>
            </p>
            <p>
                <button onClick={onAdd1}>추가 concat</button>
                <button onClick={onAdd2}>추가 스프레드</button>
                <button onClick={() => onAdd3('홍길동')}>추가('홍길동')</button>
            </p>
            <p>
                <button onClick={onMode1}>수정 5 map,if</button>
                <button onClick={onMode2}>수정 4 삼항</button>
                <button onClick={() => onMode3(1)}>수정 1 삼항(num)</button>
            </p>
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>{item.id} / {item.name} </li>)
                }
            </ul>
        </div>
    );
};

export default Test5;