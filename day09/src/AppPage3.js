import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import About from './Page3/About';
import Front from './Page3/Front';
import Home from './Page3/Home';
import Profile from './Page3/Profile';

const data = [
    {title : 'html', info : 'html에 대한 설명입니다'},
    {title : 'css', info : 'css에 대한 설명입니다'},
    {title : 'javascript', info : 'javascript에 대한 설명입니다'},
    {title : 'react', info : 'react에 대한 설명입니다'},
    {title : 'vue', info : 'vue에 대한 설명입니다'},
]

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>

                <li><Link to="/front/html">html</Link></li>
                <li><Link to="/front/css">css</Link></li>
                <li><Link to="/front/javascript">javascript</Link></li>
                <li><Link to="/front/react">react</Link></li>
                <li><Link to="/front/vue">vue</Link></li>
            </ul>

          {/* 화면에 보이는 영역 */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="front/:name" element={<Front data={data}/>}></Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
