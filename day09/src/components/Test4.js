import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

const Test4 = () => {

    const {state ,increment} = useCounter(2)
    const {data,error, loading} = useFetch(`https://jsonplaceholder.typicode.com/todos/${state}`)

    //https://jsonplaceholder.typicode.com/todos/2
    return (
        <div style={{margin:40}}>
            <h1>숫자 : {state}</h1>
            <button onClick={() => increment()}>증가</button>
            <div>
            {/* {
                !loading ? <h2>Loading...</h2> : data.titie
            } */}

            {
                data && <div>
                    <h2>id : {data.id}</h2>
                    <h3>title : {data.title}</h3>
                </div>
            }
            
            </div>
        </div>
    );
};

export default Test4;