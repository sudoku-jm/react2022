import styled from "styled-components";

//Gallery.js
export const Container = styled.div`
  width: ${(props) => props.width};
  margin: auto;
`;

//GalleryList.js
export const ImageContainer = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

//GalleryItem.js
export const ImageBox = styled.article`
  margin-bottom: 40px;
  padding: 15px;
  box-shadow: 5px 5px 10px #efefef;
  border: 1px solid #efefef;
  img {
    width: 100%;
  }
  h2 {
    font-size: 30px;
    color: hotpink;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 25px;
    li {
      margin-bottom: 5px;
    }
  }
  p {
    font-size: 13px;
    span {
      display: inline-block;
      padding: 3px 20px;
      margin-right: 5px;
      border-radius: 15px;
      background: #efefef;
      font-size: 12px;
    }
  }
`;

//GallerySearch.js
export const ImageForm = styled.form`
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
