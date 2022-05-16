import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
index.js에 스토어 생성해서 리듀서 자식(자손)컴포넌트에 전달하기 
*/
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './store';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
