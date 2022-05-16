const Bird = ({ name }) => {
    // const {name} = props
    return (
        <div>
            <h2>나는 {name} 컴포넌트</h2>
        </div>
    );
};

const Cat = ( props ) => {
    // props = {name : 고양이}
    // 구조분해 ,비구조할당

    const { name } = props
    return (
        <div>
            <h2>나는 {name} 컴포넌트</h2>
        </div>
    );
};

const Dog = ( props ) => {
    // props => 객체형식 => 객체명 props = { 사용자정의props명 : 값 }
    // props => { 사용자정의props명 : 값 }
    // props => { name : 강아지 }
    return (
        <div>
            <h2>나는 {props.name} 컴포넌트</h2>
        </div>
    );
};


const Test4 = () => {
    return (
        <div>
            <Dog name="강아지" />
            <hr/>
            <Cat name="고양이"/>
            <hr/>
            <Bird name="시조새"/>
            {/* 
                <자식컴포넌트 props명 = 전달값/>
                <자식컴포넌트 속성 = 값/>
                <자식컴포넌트 변수처럼 = 값/>
            */}
        </div>
    );
};

export default Test4;