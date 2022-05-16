import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article`
    margin-bottom:40px;
    padding:15px;
    box-shadow: 5px 5px 10px #efefef;
    border:1px solid #efefef;
    img{
        width:100%;
    }
    h2{
        font-size:30px;
        color:hotpink;
        font-weight:800;
        margin-bottom:20px;
        text-transform: uppercase;
    }
    ul{
        margin-bottom:25px;
        li{
            margin-bottom:5px;
        }
    }
    p{
        font-size:13px;
        span{
            display: inline-block;
            padding:3px 20px;
            margin-right:5px;
            border-radius: 15px;
            background:#efefef;
            font-size:12px;
        }
    }
    
`

const GalleryItem = ({item}) => {
    const { id, webformatURL, user, tags, views, downloads, likes } = item;

    const taglist = tags.split(',');

    return (
      <ImageBox>
        <img src={webformatURL} alt="" />
        <h2>{user}</h2>
        <ul>
          <li>조회수 : {views}</li>
          <li>다운로드 : {downloads}</li>
          <li>좋아요 : {likes}</li>
        </ul>

        <p>
          {taglist.map((item) => (
            <span key={item}>#{item.trim()}</span>
          ))}
        </p>
      </ImageBox>
    );
};

export default GalleryItem;