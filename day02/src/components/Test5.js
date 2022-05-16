/*
const Sub = ( props ) => {
    // props = { name : xxx , age : xxx}
    const {name, age} = props
    return (
        <div>
            <h2>자식 컴포넌트</h2>
            <h3>이름 : {name} / ({typeof name})</h3>
            <h3>나이 : {age} / ({typeof age})</h3>
            <hr/>
        </div>
    );
};
*/

const Sub = ( {name, age} ) => {
    // props = { name : xxx , age : xxx}
    // const {name, age} = props
    return (
        <div>
            <h2>자식 컴포넌트</h2>
            <h3>이름 : {name} / ({typeof name})</h3>
            <h3>나이 : {age} / ({typeof age})</h3>
            <hr/>
        </div>
    );
};

const Test5 = () => {
    const data1 = { name : '강아지' , age : 3 }
    const data2 = { name : '고양이' , age : 2 }

    return (
        <>
            <h2>props 설명</h2>
            <Sub name="홍길동" age="20"/>   {/* tupeof age = string */}
            <Sub name="김다미" age={23}/>   {/* tupeof age = number */}
            <Sub name={data1.name} age={data1.age} />
            <Sub name={data2.name} age={data2.age}/>
            <Sub {...data1}/>   {/* 스프레드 연산자 */}
            <Sub {...data2}/>

        </>
    );
};

export default Test5;