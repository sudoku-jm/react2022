import { useState } from "react";
import Test6Sub from "./Test6Sub";

const datalist = [
    {id:1, name:'김태리'},
    {id:2, name:'김다미'},
    {id:3, name:'최우식'},
    {id:4, name:'김진주'},
    {id:5, name:'김도윤'},
]


const Test6 = () => {
    const [data,setData] = useState(datalist)

    //삭제
    const onDel1 = () => {
        setData( data.filter(item => item.id !== 1) )
    }
    const onDel2 = (id) => {
        setData( data.filter(item => item.id !== id) )
    }

    //추가
    const onAdd1 = () => {
        setData([
            ...data,
            {id : 6, name : '송혜교'}
        ])
    }
    const onAdd2 = (name) => {
        setData([
            ...data,
            {id : 7 , name}
        ])
    }

    //수정
    const onMod1 = () => {
        setData( data.map(item => item.id === 3 ? {
            ...item,
            name : '정택운'
        } : item) )
    }
    const onMod2 = (id) => {
        setData( data.map(item => item.id === id ? {
            ...item,
            name : '보나'
        }:item) )
    }

    return (
        <>
            <ul>
                {
                    data.map( item => <li ket={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
            <hr/>
            <Test6Sub onDel1={onDel1} onDel2={onDel2} onAdd1={onAdd1} onAdd2={onAdd2} onMod1={onMod1} onMod2={onMod2}/>
        </>
    );
};

export default Test6;