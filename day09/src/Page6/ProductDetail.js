import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from "./data"

const ProductDetail = () => {
    const {productID} = useParams()
    const navigate = useNavigate()

    const item = data.find( item => item.id === productID)

    const {name, description, photo, price} = item
    
    const onGoHome = () => {
        navigate("/")
    }
    const onGo = () => {
        navigate("/products")
    }
    
    return (
        <div className='item'>
            <h2>운동화 상세페이지</h2>
            <h3>제품명 {name} : 가격 {price}</h3>
            <p>
                <img src={photo} alt=""/>
            </p>
            <p>{description}</p>
            <button onClick={onGoHome}>첫페이지</button>
            <button onClick={onGo}>제품목록보기</button>
        </div>
    );
};

export default ProductDetail;