import React from 'react';
import { BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import Main from './Page6/Main';

import './css/reset.css'
import './Page6/style.css'
import Products from './Page6/Products';
import ProductDetail from './Page6/ProductDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <nav>
              <ul>  
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/products">
                <Route index element={<Products/>}/>
                <Route path=":productID" element={<ProductDetail/>}/>
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
