import React, { useState } from "react";
import styled from "styled-components";

const ImageForm = styled.form`
  padding: 25px 0;
  text-align: center;
  input {
    width: 400px;
    height: 45px;
    box-sizing: border-box;
    outline: none;
    padding: 0 15px;
    font-size: 16px;
  }
  button {
    width: 120px;
    height: 45px;
    border: none;
    font-size: 16px;
    vertical-align: top;
    background: #000;
    color: #fff;
  }
`;

const GallerySearch = ({ onSearch }) => {
  const [text, setText] = useState("");

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onSearch(text);
    setText("");
  };

  return (
    <ImageForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={text}
        onChange={inputChange}
      />
      <button>검색</button>
    </ImageForm>
  );
};

export default GallerySearch;
