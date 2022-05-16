import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
    const {id,name, email } = item
    const navigate = useNavigate()
    const css = {
        border:'1px solid hotpink',margin:20,padding:20
    }
    const onGo = () => {
        const url = `/member/${id}`
        navigate(url)
    }
    return (
        <div style={css}>
             <p> ID : {id}</p>
             <h4> 이름 : {name}</h4>
             <h5> 이메일 : {email}</h5>
             <p><Link to={`/member/${id}`}>자세히보기</Link></p>
             <button onClick={onGo}>{id}번 상세보기</button>
        </div>
    );
};

export default Member;