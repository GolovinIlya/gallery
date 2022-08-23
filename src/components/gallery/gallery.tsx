import React from "react";
// import { IAuthor } from '../interface/interface';
import "./gallery.scss";
import { GalleryItem } from "./galleryItem";

interface GalleryProps {
  appState: any;
}

const Gallery: React.FC<GalleryProps> = ({ appState }) => {
  return (
    <div className="gallery">
      {appState &&
        appState.map((el: any) => <GalleryItem paintings={el} key={el.name} />)}
    </div>
  );
};

export default Gallery;
