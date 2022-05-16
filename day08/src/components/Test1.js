import React, { useMemo, useState } from "react";

const Test1 = () => {
  const [cnt1, setCnt1] = useState(1);
  const [cnt2, setCnt2] = useState(1);

  //사용자가 함수를 만들어서 return값을 처리할 경우 (return 값 기억 = useMemo)
  const isEven = useMemo(() => {
    console.log("test");
    console.log(cnt1);
    return cnt1 % 2 === 0;
  }, [cnt1]);

  return (
    <div>
      <h2>카운트 : {cnt1}</h2>
      <button onClick={() => setCnt1((prevCnt) => prevCnt + 1)}>증가</button>

      <h2>카운트 : {cnt2}</h2>
      <button onClick={() => setCnt2((prevCnt) => prevCnt + 1)}>증가</button>

      <h2>결과 : {isEven ? "짝수" : "홀수"}</h2>
    </div>
  );
};

export default Test1;
