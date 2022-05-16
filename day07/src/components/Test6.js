import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:300px; border:1px solid #000; padding:20px; margin: 20px auto;
`
const Box1 = styled.section`
    padding:15px; background:pink; margin-bottom: 15px; transition: 0.4s;
    &:hover{
        background: tomato; padding: 25px;
    }
`

const Box2 = styled('article')`
    padding:20px; background:lime; margin-bottom:15px; 
    &:hover{
        background:green; transition: 0.4s;
    }
`

const Box3 = styled('button')`
    width:100%; border:none; background:#333; color:#fff; height:50px;transition:0.4s;
    &:hover{
        background:hotpink; text-indent:20px;
    }
`

const Test6 = () => {
    return (
        <Container>
            <Box1>안녕하세요</Box1>
            <Box2>안녕하세요</Box2>
            <Box3>안녕하세요</Box3>
        </Container>
    );
};

export default Test6;