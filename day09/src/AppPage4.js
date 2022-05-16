import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import About from './Page4/About';
import Home from './Page4/Home';
import Profile from './Page4/Profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>


            </ul>

          {/* 화면에 보이는 영역 */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="profile" element={<Profile/>}>
                <Route path=":name"></Route>
                {/* /profile/:"name 과 같다." */}
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
