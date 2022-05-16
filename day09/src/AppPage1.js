import React from 'react';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import NotFiles from './Page1/NotFiles';
import About from './Page1/About';
import Ceo from './Page1/Ceo';
import Home from './Page1/Home';
import Sub1 from './Page1/Sub1';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/ceo">Ceo</Link></li>
              <li><Link to="/sub1">Sub1</Link></li>
            </ul>
          </nav>

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