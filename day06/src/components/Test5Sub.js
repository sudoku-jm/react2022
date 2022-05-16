import React, { useEffect, useState } from 'react';

const Test5Sub = (isActive) => {
    const [now ,setNow ] = useState( new Date() )

    useEffect(() => {
        console.log('시작 이펙트')
        let timer
        if(isActive){
            timer = setInterval( () => {
                setNow( new Date() )
            },1000)
        }else{
            clearInterval(timer)
        }
        return() => {
            console.log('정리')
            clearInterval(timer)
        }
    },[isActive]) 
    return (
        <div>
            <h2>날짜 : {
            now.toLocaleDateString()
            //2022. 4. 10.
            } </h2>
            <h2>시간 : {
            now.toLocaleTimeString()
            //오전 11:54:29
            }</h2>
        </div>
    );
};

export default Test5Sub;