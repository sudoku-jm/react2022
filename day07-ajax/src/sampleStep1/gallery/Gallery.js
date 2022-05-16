import React, { useEffect, useState } from "react";
import GlobalStyle from "../styled/Global";
import axios from "axios";
import styled from "styled-components";
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";

const Container = styled.div`
  width: ${(props) => props.width};
  margin: auto;
`;

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("flowers");

  useEffect(() => {
    const API_KEY = "2923385-ca284ed3f66133a8962e87e57";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("주소를 찾을 수 없습니다.");
      });
  }, [text]);

  const onSearch = (text) => {
    setText(text);
  };

  return (
    <>
      <GlobalStyle />
      <Container width="1400px">
        <GallerySearch onSearch={onSearch} />
        <GalleryList data={data} />
      </Container>
    </>
  );
};

export default Gallery;
