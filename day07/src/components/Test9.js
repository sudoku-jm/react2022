import React from 'react';
import styled,{keyframes} from 'styled-components';

const Container = styled.div`
    height:100vh;display:flex;justify-content:center;align-items:center;background: skyblue;
`
const ani = keyframes`
    0%{ transform:translateY(0)}
    25%{ transform:translateY(-20px) rotate(20deg)}
    50%{ transform:translateY(10px)}
    75%{ transform:translateY(-20px) rotate(-20deg)}
    100%{transform:translate(0)}
`

const Hat = styled.div`
    font-size:150px;
    animation: ${ani} 3s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
`

const Test9 = () => {
    return (
        <Container>
            <Hat>🎩</Hat>
        </Container>
    );
};

export default Test9;