import React, { useState } from "react";
import Test3Sub from "./Test3Sub";

const Test3 = () => {
    const [color, setColor] = useState('')
    const [food, setFood] = useState('')

    const onColor = (e) => {
        const {value} = e.target
        setColor(value)
    }

    const onFood = (e) => {
        const {value} = e.target
        setFood(value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input type="text" value={color} onChange={onColor} />
                <p>선택 : red, blue, green, yellow</p>
            </div>
            
            <hr/>
            
            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input type="radio" value="갈비" name="food" onChange={onFood}/>
                    <label>갈비</label>
                </p>
                <p>
                    <input type="radio" value="불고기" name="food" onChange={onFood}/>
                    <label>불고기</label>
                </p>
                <p>
                    <input type="radio" value="김밥" name="food" onChange={onFood}/>
                    <label>김밥</label>
                </p>
                <p>
                    <input type="radio" value="냉면" name="food" onChange={onFood}/>
                    <label>냉면</label>
                </p>
            </div>

            <hr/>

            <Test3Sub color={color} food={food}/>
        </div>
    );
};

export default Test3;
