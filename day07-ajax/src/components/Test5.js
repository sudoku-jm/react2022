import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';


const Container = styled.div`
    width:1400px;margin:15px auto; display: flex; flex-wrap: wrap; justify-content: center;
`

const Article = styled.article`
    width:300px; margin:10px; padding:10px; border:1px solid #ccc; margin-bottom: 15px; 
    a{
        text-decoration: none;color:#000;
        h2{
            font-size:20px;margin-bottom:10px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
        }
        img{
            width:300px; height:300px;
        }
        p{
            font-size:15px; line-height: 1.7;
        }
    }
`

const Test5 = () => {
    const [data, setData] = useState([])
    const [loading ,setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ab4fcd0499b24f01a20c052933c40261'

        axios.get(url)
            .then( res => {
                console.log(res.data.articles)
                setData(res.data.articles)
                setLoading(false)
                setError(null)
            })
            .catch( error => {
                setLoading(true)
                setError('에러가 발생했습니다.')
            })
    },[])

    return (
        <Container>
            {
                data && loading ? <h2>로딩중...</h2> : 
                data.map( (item,index) => <Article key={index}>
                    <a href={item.url} target="_blank" title="새창열림">
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} alt={item.title}/>
                        <p>{item.description}</p>
                    </a>
                </Article>)
            }
            <h3>{error ? error : null}</h3>
        </Container>
    );
};

export default Test5;