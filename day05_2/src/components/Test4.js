import React, { useState } from 'react';


const dataList = [
    {id : 1, name:'chk1',text:'연령(만 14세 이상) 확인 (필수)',isChecked : false},
    {id : 2, name:'chk2',text:'증권플러스 이용약관(필수)',isChecked : false},
    {id : 3, name:'chk3',text:'개인정보 수집 및 이용에 대한 동의(필수)',isChecked : false},
    {id : 4, name:'chk4',text:'이벤트 우대혜택 동의 안내(필수)',isChecked : false},
]


const Test4 = () => {

    const [data, setData] = useState(dataList)


    //check
    const changeInputChk = (e) =>{
        const {checked,name} = e.target
        console.log(checked)
        //checked : true 또는 false 값
        if( name === 'all' ){
            setData(
                //나머지 checkbox들이 all에 맞게 체크
                data.map( item => {
                    return{
                        ...item,
                        isChecked : checked
                    }
                })
            )
        }else{
            setData(
                data.map( item => item.name === name ? {
                    ...item,
                    isChecked : checked
                } : item)
            )
        }
    }
    

    return (
        <div>
            <p>
                <input type="checkbox" name="all" 
                onChange={changeInputChk} 
                checked={
                    //나머지 checked가 false 1개 미만일 때 = true = all true
                    // 나머지 checked가 false 1개 이상 시 = false
                    data.filter( item => item.isChecked !== true ).length < 1
                }/>
                <label>전체 약관동의</label>
            </p>
           {
               data.map( item => <p key={item.id}>
                   <input type="checkbox" name={item.name} checked={item.isChecked} onChange={changeInputChk}/>
                   <label>{item.text}</label>
               </p>)
           }
        </div>
    )
};

export default Test4;