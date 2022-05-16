import React from 'react';

const BusinessItem = ({item}) => {
    const {imgUrl, title, engTitle, des} = item
    return (
        <li>
            <a href="#">
                <div><img src={imgUrl} alt=""/></div>
                <h3>
                    {title}
                <span> {engTitle}</span></h3>
                <p>{des}</p>
            </a>
        </li>
    );
};

export default BusinessItem;