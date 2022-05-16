import React, { useRef, useState } from 'react';

import dataList from '../assets/api/friendData'
import FriendInput from './FriendInput';
import FriendList from './FriendList.';
import './style.css'

const Friend = () => {
    const [data,setData] = useState(dataList)
    const no = useRef(6)

    //삭제
    const onDel = (id) => {
        setData(
            data.filter( item => item.id !== id)
        )
    }

    //추가
    const onAdd = (form) => {
        form.id = no.current++
        setData([
            ...data,
            form
            // {
                // id: no.current++,
                // ...form
            // }
        ])
    }

    //모두삭제
    const onRemoveAll = () => {
        setData([])
    }

    //초기복구
    const onRestore = () => {
        setData(dataList)
    }

    //추가 활성 비활성
    const [isChk, setIsChk] = useState(true)
    const onChk = (e) => {
        const {checked} = e.target
        setIsChk(checked)
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원 : {data.length}</h1>
            <p className="chk">
                <input type="checkbox" onChange={onChk} checked={isChk}/>
                {isChk ? '추가 활성' : '추가 비활성'}
            </p>
            <FriendList data={data} onDel={onDel}/>
            <p className="btn">
                <button onClick={onRemoveAll}>모두삭제</button>
                <button onClick={onRestore}>초기복구</button>
            </p>
            {
                isChk &&
                <FriendInput onAdd={onAdd}/>
            }
        </div>
    );
};

export default Friend;