import React, { useEffect, useReducer } from 'react';
import axios from 'axios'

const initalState = {
    data : {},
    error : null,
    loading : true
}


const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCES' :
            return{
                data : action.payload,
                error : null,
                loading : false
            }
        case 'ERROR' : 
            return{
                data : {},
                error : '에러...',
                loading : true
            }
        default : 
            return state
    } 
}

const Test14 = () => {

    const [state, dispatch] = useReducer(reducer,initalState)  
      
    const {data, error, loading} = state

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        axios.get(url)
            .then( res => {
                dispatch({type : 'SUCCES',payload:res.data})
            })
            .catch( error => {
                dispatch({type : 'ERROR'})
            })
    },[])

    return (
        <div>
            <h2>
                {
                    data && loading ? '로딩중...' : data.title
                }
            </h2>
            <p>
                {
                    error ? error : null
                }
            </p>
        </div>
    );
};

export default Test14;


/* 
API 
https://jsonplaceholder.typicode.com/posts
*/