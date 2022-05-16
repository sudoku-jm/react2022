import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Cnt from './components/count/Cnt';
import Count from './components/count/Count';
import Counter from './components/count/Counter';
import Todos from './components/todos/Todos';
import ChangeColorProvider from './contexts/ChangeColorContext';
import ChangeCounterProvider from './contexts/ChangeCounterContext';
import CntProvider from './contexts/CntContext';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import TodoProvider from './contexts/TodoContext';
import ToggleProvider from './contexts/ToggleContext';

const App = () => {
    return (
        <div>

            <TodoProvider>
              <ColorProvider>
                <CountProvider>

                  <Todos/>
                  <hr/>
                  <Color/>
                  <hr/>
                  <Count/>
                  
                </CountProvider>
              </ColorProvider>
            </TodoProvider>

          
        </div>
    );
};

export default App;