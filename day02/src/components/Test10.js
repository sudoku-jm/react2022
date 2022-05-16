import {useState} from 'react'

// const Test10 = () => {
//     const [isActive , setIsActive] = useState(true)

//     const onChange = () => {
//         setIsActive(!isActive)
//     }
//     return (
//         <>
//             <h3>h1을 클릭하면 배경색이 hotpink-skyblue왕복</h3>
//             <h1 style={{margin:10,padding:40,backgroundColor:isActive? 'hotpink' : 'skyblue',cursor : 'pointer'}} onClick={onChange}>
//                 backgroundColor : {isActive? 'hotpink' : 'skyblue'}
//             </h1>
//         </>
//     );
// };


const Test10 = () => {
    const [bgColor , setBgColor] = useState('hotpink')

    const onColor = () => {
        setBgColor( bgColor === 'hotpink' ? 'skyblue' : 'hotpink')
    }
    return (
        <>
            <h3>h1을 클릭하면 배경색이 hotpink-skyblue왕복</h3>
            <h1 style={{margin:10,padding:40,backgroundColor:bgColor,cursor : 'pointer'}} onClick={onColor}>
                backgroundColor : {bgColor}
            </h1>
        </>
    );
};


export default Test10;