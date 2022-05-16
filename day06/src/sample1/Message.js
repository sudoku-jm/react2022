import React, { useEffect } from 'react';

const Message = ({msg, isShow ,setIsShow }) => {

    //2초후에 사라지기 useEffect 이용. setTimeout

    useEffect(() => {
       
       const timer = setTimeout(() => {
            setIsShow(false)
        },2000)

        return() => {
            clearTimeout(timer)
        }
    },[msg]) //메세지가 바뀔 때마다

    return (
        <div className={`message ${isShow && 'on'}`}>
            알림 : {msg}
        </div>
    );
};

export default Message;