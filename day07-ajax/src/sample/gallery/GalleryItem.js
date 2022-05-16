import React from "react";
import { ImageBox } from "../styled/pixastyle";

const GalleryItem = ({ item }) => {
  const { id, webformatURL, user, tags, views, downloads, likes } = item;

  const taglist = tags.split(",");

  return (
    <ImageBox>
      <img src={webformatURL} alt="" />
      <h2>{user}</h2>
      <ul>
        <li>조회수 : {views}</li>
        <li>다운로드 : {downloads}</li>
        <li>좋아요 : {likes}</li>
      </ul>

      <p>
        {taglist.map((item) => (
          <span key={item}>#{item.trim()}</span>
        ))}
      </p>
    </ImageBox>
  );
};

export default GalleryItem;
