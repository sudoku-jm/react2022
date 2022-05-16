//import 참조변수 from './경로/파일명'
//.js생략
//'./' 사용자가 만든 경로 src안에서 들고올 때는 ./ 써준다
import Dog from './components/aaa'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
//파일명 = 컴포넌트명 맞춰주도록 해준다.

const App = () => {
  return (
    <div>
      <Test2/>
      <hr/>
      <Test1/>
      <hr/>
      <Dog/>
      <Dog/>
    </div>
  );
};

export default App;