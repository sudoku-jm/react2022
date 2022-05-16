import React from 'react';

const GalleryItem = ({item , onImg}) => {
    const {id , imgurl, title, des} = item
    return (
        <li>
           <img src={imgurl} alt={title} onClick={() => onImg(id)}/> 
        </li>
    );
};

export default GalleryItem;