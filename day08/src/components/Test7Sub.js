/* import React from 'react';

const Test7Sub = ({cnt,title}) => {
    console.log( title, cnt)
    return (
        <div style={{border:'1px solid #f00',padding:15,margin:20,fontSize:15}}>
            <h1>출력 : {title} / {cnt}</h1>
        </div>
    );
};

export default React.memo(Test7Sub); */

import React, { memo } from 'react';

const Test7Sub = memo( ({cnt,title}) => {
    console.log( title, cnt)
    return (
        <div style={{border:'1px solid #f00',padding:15,margin:20,fontSize:15}}>
            <h1>출력 : {title} / {cnt}</h1>
        </div>
    );
});

export default Test7Sub;