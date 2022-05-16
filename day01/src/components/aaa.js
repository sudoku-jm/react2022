// 파일명.js    아무이름이나 상관이 없다.
// 컴포넌트명의 첫글자는 대문자로 시작
// 파일명.js / 파일명.jsx 둘 다 쓸 수 있다. 어지간하면 .js
const Dog = () => {
    return (
        <div>
            <h1>Dog 컴포넌트</h1>
            <h2>테스트용</h2>
        </div>
    );
};

//다른 컴포넌트에서 가져다 쓸 수 있게 컴포넌트의 return부분이 나감
//export 내보내기
export default Dog;