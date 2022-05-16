import { useState } from "react"

const Display = ({ani}) => {
    return(
        <div>
            <h2>Display 컴포넌트</h2>
            <p>내가 좋아하는 동물은 '{ani}'입니다.</p>
        </div>
    )
}
const Animal = ({ ani, onAni }) => {
    return(
        <div>
             <h2>Animal 컴포넌트</h2>
             <label>동물 : </label>
             <input type="text" value={ani} onChange={onAni} />
             <span style={{marginLeft:10}}>{ani}</span>
        </div>
    )
}
const Name = () => {
    const [text , setText] = useState('')
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    return(
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름 : </label>
            <input type="text" value={text} onChange={changeInput}/>
            <span style={{marginLeft:10}}>{text}</span>
        </div>
    )
}
const Test1 = () => {
    const [ani , setAni] = useState('고양이')
    const onAni = (e) => {
        const {value} = e.target
        setAni(value)
    }
    return (
        <div>
            <Name/>
            <hr/>
            <Animal ani={ani} onAni={onAni}/>
            <hr/>
            <Display ani={ani}/>
            <hr/>
        </div>
    );
};

export default Test1;