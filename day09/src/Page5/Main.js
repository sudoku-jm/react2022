import React, { useEffect, useState } from 'react';
import axios from "axios"
import Member from './Member';
import { useAxios } from '../hooks/useAxios';

const Main = () => {
    const {data} = useAxios('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
            <h1>Main Page / 회원수 : {data.length}</h1>
            {
                data.map( item => <Member key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Main;