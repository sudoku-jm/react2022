const Test1 = () => {
    // 함수영역 - 조건문, 제어문등 모두 가능
    /*
        {속성 : 값, 속성 : 값, backgroundColor, fontSize, textIndent : 숫자, '숫자px', 'background-color'}
    */

    const title = '신상명세서'
    const name = '홍길동'
    const age = 20
    const addr = '서울시 서초구 서초동'
    const css1 = {
        backgroundColor : 'pink',
        padding : 20,
        margin : 10,
        border : '1px solid #000',
        fontSize : 25
    }
    const css2 = {
        width : 400,
        padding : 15,
        margin : 30,
        backgroundColor : 'hotpink',
        color : '#fff',
        fontSize : 18
    }

    return (
        <div>
           <h1 style={css1}>{title}</h1> 
           <h2 style={css2}>이름 : {name}</h2>
           <h2 style={{backgroundColor : 'yellow', padding : 15, width : 300, margin : 'auto'}}>나이 : {age}</h2>
           <h2>주소 : {addr}</h2>
           {
               /* <p style={객체}> {자바스크립트형식} </p> */
           }
        </div>
    );
};

export default Test1;

