import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Count from './components/counter/Count';
import Todos from './components/todos/Todos';

const App = () => {
  return (
    <div>
      <Todos/>
      <hr/>
      <Color/>
      <hr/>
      <Count/>
      <hr/>
      <ChangeColor/>
    </div>
  );
};

export default App;