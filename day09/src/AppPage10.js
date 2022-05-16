import React from 'react';
import Color from './components/color/Color';
import Count from './components/count/Count';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';

const App = () => {
    return (
        <div>
            <CountProvider>
                <Count/>
            </CountProvider>
            <hr/>

            <ColorProvider>
                <Color/>
            </ColorProvider>
        </div>
    );
};

export default App;