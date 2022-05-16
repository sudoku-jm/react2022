import Test6Sub from "./Test6Sub";

const Test6 = () => {
    return (
        <div>
            <Test6Sub
                name="김태리"
                age={19}
                addr="서울"
                tel="010-0000-1111"
                done={true}
                color="tomato"
                bgColor="pink"
 />
            <hr/>
            <Test6Sub
                name="김다미"
                addr="제주"
                color="skyblue"
                bgColor="hotpink"
            />
            <hr/>
            <Test6Sub/>
            <hr/>
        </div>
    );
};

export default Test6;