import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import Main from './Page5/Main';
import Member from './Page5/Member';
import MemberDetail from './Page5/MemberDetail';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>

          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="member">
                <Route element={<Member/>}/>
                <Route path=":memberId" element={<MemberDetail/>}/>
              </Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
