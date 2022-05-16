import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAxios } from '../hooks/useAxios';

const MemberDetail = () => {
    const {memberId} = useParams()
    const navigate = useNavigate()
    const {data} = useAxios(`https://jsonplaceholder.typicode.com/users/${memberId}`)


    const {name, email, phone, website} = data

    const css = {
        border:'1px solid hotpink',margin:20,padding:20
    }

    const onGo = () => {
        navigate('/')
        // navigate(-1) // 이전 한단계 -1 , 1, 2
    }

    return (
        <div style={css}>
             <h1>MemberDetail Page : {memberId}</h1>
             <h3>이름 : {name}</h3>
             <ul>
                 <li>이메일 : {email}</li>
                 <li>전화번호 : {phone}</li>
                 <li>웹사이트 : {website}</li>
             </ul>
             <button onClick={onGo}>목록</button>
        </div>
    );
};

export default MemberDetail;