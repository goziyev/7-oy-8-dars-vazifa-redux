import React from "react";
import bookmarks from "../../assets/Bookmark.svg";
import seriesLogo from "../../assets/series.svg";
import "./index.css";
export default function CaruselCard({ el }) {
  return (
    <div
      className="carusel__card-image carousel-item w-1/4"
      style={{ background: `url(${el.cover.url})` }}
    >
      <div className="carusel__card-bookmark">
        <img src={bookmarks} alt="" />
      </div>
      <div className="mt-16 pt-12">
        <h3 className="mt-10  ">
          <img src={seriesLogo} alt="" />
        </h3>
        <h2 className="carusel__card-title">{el.name}</h2>
      </div>
    </div>
  );
}
