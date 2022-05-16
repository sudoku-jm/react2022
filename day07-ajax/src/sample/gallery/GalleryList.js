import React from "react";
import GalleryItem from "./GalleryItem";
import Masonry from "react-masonry-css";
import { ImageContainer } from "../styled/pixastyle";

const GalleryList = ({ data }) => {
  return (
    <ImageContainer>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </ImageContainer>
  );
};

export default GalleryList;
