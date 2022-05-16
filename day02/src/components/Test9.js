import React, {useState} from 'react';

const Test9 = () => {
    const [name, setName] = useState('아무개')
    const [age , setAge] = useState(0)
    const [color, setColor] = useState('lime')

    const onName1 = () => {
        setName('김태리')
    }
    
    const onName2 = () => {
        setName('김다미')
    }

    const onColor1 = () => {
        setColor('hotpink')
    }

    const onColor2 = () => {
        setColor('skyblue')
    }

    const onAge1 = () => {
        setAge(20)
    }

    const onAge2 = () => {
        setAge(30)
    }

    return (
        <div>
            <h2 style={{backgroundColor:color}}>
                이름 : {name},
                나이 : {age}살,
                컬러 : {color}
            </h2>
            <p>
                <button onClick={onName1}>김태리</button>
                <button onClick={onName2}>김다미</button>
                <button>최우식</button>
            </p>
            <p>
                <button onClick={onColor1}>핫핑크</button>
                <button onClick={onColor2}>스카이블루</button>
                <button>토마토</button>
            </p>
            <p>
                <button onClick={onAge1}>20살</button>
                <button onClick={onAge2}>30살</button>
                <button>10살</button>
            </p>
        </div>
    );
};

export default Test9;

/* 

Hook은 React 16.8버전에 새로 추가되었습니다. Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다.


*/