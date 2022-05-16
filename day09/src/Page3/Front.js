import React from 'react';
import { useParams } from 'react-router-dom';

const Front = ({data}) => {
    // const {사용자정의변수} = useParams()
    const {name} = useParams();
    return (
        <div>
             <h1>Front Page 입니다</h1>
             <h2>{name}값 받기</h2>
             {
                 data.filter( item => item.title === name )
                     .map( (item,index) => <div key={index}>
                         <h2>{item.title}</h2>
                         <h2>{item.info}</h2>
                     </div> )
             }
        </div>
    );
};

export default Front;