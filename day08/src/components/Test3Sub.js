import React, { useMemo } from "react";

const getColor = (color) => {
    console.log('getColor')
    switch(color) {
        case 'red' : return 'red 입니다';
        case 'blue' : return 'blue 입니다';
        case 'green' : return 'green 입니다';
        case 'yellow' : return 'yellow 입니다';
        default : return '없음';
    }
}

const getFood = (food) => {
    console.log('getFood')
    switch(food){
        case '갈비' : return '갈비는 맛있어';
        case '불고기' : return '불고기는 맛있어';
        case '김밥' : return '김밥은 맛있어';
        case '냉면' : return '냉면은 맛있어';
        default : return '음식주세요';
    }
}

const Test3Sub = ({color, food}) => {
    
    const colorInfo = useMemo(() => {
        return getColor(color)
    },[color])

    const foodInfo = useMemo(() => getFood(food),[food]);

  return (
    <div>
        <h3>선택 색 : {color}</h3>
        <h4>선택 색 설명 : {colorInfo}</h4>

        <h3>선택 음식 : {food}</h3>
        <h4>선택 음식 설명 : {foodInfo}</h4>
    </div>
  );
};

export default Test3Sub;
