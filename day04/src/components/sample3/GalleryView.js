import React from 'react';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const GalleryView = ({data , cat , onImg}) => {
    
    return (
        <div className="bigview">
            <GalleryBig cat={cat}/>
            <GalleryList data={data} onImg={onImg}/>
        </div>
    );
};

export default GalleryView;