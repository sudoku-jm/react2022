import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({data , onImg}) => {
    return (
        <ul className="list">
            {
                data.map( item => <GalleryItem key={item.id} item={item} onImg={onImg}/>)
            
            }
        </ul>
    );
};

export default GalleryList;