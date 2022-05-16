import React, { useRef } from 'react';

const Test8 = () => {

    const colorRef = useRef(null)

    const onView = () => {
        const data = {
            color : colorRef.current.value
        }
        console.log(data)   //{color: ''}
    }

    return (
        <div>
           {/* ref 수업용 */}
           <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="pink">pink</option>
            </select> 
            <button onClick={onView}>선택</button>
        </div>
    );
};

export default Test8;/* ref 수업용 */