import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import './style.css'
import datalist from '../../assets/api/catData';

// const datalist = [
//     {id : 1, imgurl : './images/cat0.jpg', title:'고양이1', des:'고양이1 설명'},
//     {id : 2, imgurl : './images/cat1.jpg', title:'고양이2', des:'고양이2 설명'},
//     {id : 3, imgurl : './images/cat2.jpg', title:'고양이3', des:'고양이3 설명'},
//     {id : 4, imgurl : './images/cat3.jpg', title:'고양이4', des:'고양이4 설명'},
//     {id : 5, imgurl : './images/cat4.jpg', title:'고양이5', des:'고양이5 설명'},
//     {id : 6, imgurl : './images/cat5.jpg', title:'고양이6', des:'고양이6 설명'},
//     {id : 7, imgurl : './images/cat6.jpg', title:'고양이7', des:'고양이7 설명'},
// ]

const Gallery = () => {
    const [data, setData] = useState(datalist)
    const [cat , setCat] = useState(data[0])

    const onImg = (id) => {
        setCat( data.find(item => item.id === id ))
    }

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onImg={onImg}/>
            <GalleryText cat={cat}/>
        </div>
    );
};

export default Gallery;