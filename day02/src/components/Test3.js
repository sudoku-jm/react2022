
const Test3 = () => {
    /* 
        함수 : 조건문 - if , switch, 삼항, 모두허용
        jsx : 조건문 삼항, && , ||
    */

    const done1 = true
    const done2 = false
    const done3 = undefined


    return (
        <>
            <p>{ done1 === true ? <button>확인</button> : <button>취소</button>}</p>
            <p>{ done1 && <span>참</span>}</p>
            <p>{ done2 === false || '거짓'}</p>
            <p>{ done2 || '거짓1'}</p>
            <p>{ done3 || <button>조회된 게시글이 없습니다.</button>}</p>
        </>
    );
};

export default Test3;