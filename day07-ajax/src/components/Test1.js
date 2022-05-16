import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [data, setData] = useState([])

    
    //useEffect로 가져와야 데이터가 보인다.
     /* async , await , axios.get() 
    async , await  : 둘은 짝이다. */
    useEffect( () => {
        const getData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }
        getData()
    },[])

    
    /* async , await , fetch ()
    async , await : 둘은 짝이다. */
    /* useEffect( () => {
        const getData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json() //객체로 변환
            setData(data)
        }
        getData()
    },[]) */


    /* Axios */
    /* axios.get() */
    /* useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // .then( res => console.log(res.data) )
            //객체로 받아옴
            .then( res => setData(res.data) )
    },[]) */


    /* fetch */
    /* useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )  //json으로 가져오기 -> 자스 객체
        .then( res => setData(res) )
    },[data]) */

    return (
        <div>
            <ul>
                {
                    data.map( (item) => <li key={item.id}>
                        {item.id} / {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;