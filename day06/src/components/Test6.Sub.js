import React, { useEffect } from 'react';

const Test6Sub = ( {msg, isShow, setIsShow} ) => {

    //3초후에 한번 만 사라지기
    useEffect( () => {
        console.log('시작')
        let timer
        // if(isShow){
           timer = setTimeout(() => {
                setIsShow(false)
            },3000)
        // }

        return() => {
            console.log('정리')
            clearTimeout(timer)
        }
    },[isShow]) //바뀌는 시점부터 3초

    return (
        <>
            {
                isShow &&
                <div style={{backgroundColor:'pink',padding:'20px 30px', margin:20, fontSize:25}}>
                    메세지 : {msg}
                </div>
            }
            <p>3초후에 사라지기</p>
        </>
    );
};

export default Test6Sub;