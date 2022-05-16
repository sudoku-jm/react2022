import React, { useState } from "react";
import { ImageForm } from "../styled/pixastyle";

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
