import React from 'react';
// import 참조변수 from '이미지경로'
import m0 from '../assets/img/m0.jpg';
import m1 from '../assets/img/m1.jpg'

const Test4 = () => {
    return (
        <>
            {/* assets에서 가져오기 */}
            <img src={m0} alt=""/>
            <img src={m1} alt=""/>
            <hr/>
            {/* public에서 가져오기 */}
            <img src="./images/cat0.jpg" alt=""/>
            <img src="./images/cat1.jpg" alt=""/>
        </>
    );
};

export default Test4;