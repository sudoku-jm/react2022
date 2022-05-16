import React from 'react';

const GalleryBig = ({cat}) => {
    const {id, imgurl, title, des} = cat
    return (
        <div className="bigimg">
            <h2>{title}</h2>
            <img src={imgurl} alt={title}/>
        </div>
    );
};

export default GalleryBig;