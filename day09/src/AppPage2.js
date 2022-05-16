import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import './css/reset.css';
import NotFiles from './Page2/NotFiles';
import About from './Page2/About';
import Ceo from './Page2/Ceo';
import Home from './Page2/Home';
import NavBar from './Page2/NavBar';
import './Page2/style.css';
import Sub1 from './Page2/Sub1';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <NavBar/>

          {/* 화면에 보이는 영역 */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/ceo" element={<Ceo/>}></Route>
            <Route path="/sub1" element={<Sub1/>}></Route>
            <Route path="*" element={<NotFiles/>}></Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;