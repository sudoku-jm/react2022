import React from 'react';
import styled , {css} from 'styled-components';

//${props => props.props명}
const Container = styled.div`
    width:${props => props.ww};
    margin:10px;
    border:1px solid #000;
    padding:15px;
    background:${props => props.bg ? props.bg : 'beige'};
`

const Box = styled.button`
    border:none;
    width:${props => props.width};
    height:50px;
    border:1px solid #333;
    margin:5px;
    color:#fff;
    background: ${props => props.bgColor ? props.bgColor : '#333'};

    ${props => props.vscss && css`
        background:tomato;
        width:100%;
        color:#fff;
        text-transform: uppercase;
        transition: 0.5s;
        &:hover{
            background:hotpink;
            color:#fff;
        }
    `}
`

const Test7 = () => {
    return (
        <Container ww="450px" bg="pink">
                <Box width="150px" bgColor="hotpink">test</Box>
                <Box width="250px">test</Box>
                <Box>test</Box>
                <Box width="80px" bgColor="lime">test</Box>
                <Box width="160px">test</Box>
                <Box vscss>test</Box>
        </Container>
    );
};

export default Test7;