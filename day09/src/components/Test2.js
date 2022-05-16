import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Test2 = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const {data , error, loading} = useFetch(url)

    if(error){
        console.log(error)
    }

    return (
        <div>
            <h1> posts data list</h1>
            {
                !loading && <h2>Loading...</h2>
            }
            {
                data && data.map( item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)

                
            }
        </div>
    );
};

export default Test2;