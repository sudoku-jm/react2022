import React, { useState } from 'react';
import '../assets/css/reset.css'
import BusinessList from './BusinessList';
import './style.css'

//import 참조변수 from '경로/파일명.js' - js 생략
import dataList from '../assets/api/businessData'

const Business = () => {
    const [data ,setData] = useState(dataList)

    return (
        <>
            <section className="business">
                <div className="inner">
                    <h2>BUSINESS</h2>
                    <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

                    <BusinessList data={data}/>

                    <p className="more"><a href="#">View More</a></p>
                </div>
            </section>
        </>
    );
};

export default Business;