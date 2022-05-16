

//파일명 = 컴포넌트명 맞춰주도록 해준다.
const Test1 = () => {
    return (
        <>
            <h2>JSX영역 - 문법</h2>
            <p> 태그열면 반드시 닫기</p>
            <img />
            <input />
            <br/>
            <hr/>
            <p>
                전체영역 div는 한 줄 이상일 때 반드시 있어야한다.<br/>
                플래그먼트
                
                {/* 
                <React.Fragment></React.Fragment>
                <Fragment></Fragment>
                <></>
                */}

                
                단, div, section , table, article도 가능
            </p>
        </>
    );
};

export default Test1;