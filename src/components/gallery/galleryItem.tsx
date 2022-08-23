/* eslint-disable array-callback-return */
import React from "react";
import "./galleryItem.scss";

interface GalleryItemProps {
  paintings: any;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ paintings }) => {
  if (!paintings || paintings.length === 0) return <p>Нет данных.</p>;

  return (
    <div className="galleryItem">
      <img
        className="galleryItem__img"
        src={`https://test-front.framework.team/${paintings.imageUrl}`}
        alt=""
      />
      <div className="galleryItem__name">
        <span>{paintings.name}</span>
        <span className="galleryItem__span">
          <br />
          Author:{" "}
        </span>
        <span className="galleryItem__span galleryItem__span_l">
          {paintings.authorName}
        </span>
        <span className="galleryItem__span">
          <br />
          Created:{" "}
        </span>
        <span className="galleryItem__span galleryItem__span_l">
          {paintings.created}
        </span>
        <span className="galleryItem__span">
          <br />
          Locations:{" "}
        </span>
        <span className="galleryItem__span galleryItem__span_l">
          {paintings.locationName}
        </span>
      </div>
    </div>
  );
};
