import React from "react";
import bookmarks from "../../assets/Bookmark.svg";
import seriesLogo from "../../assets/series.svg";
import "./index.css";
function Card({ el }) {
  return (
    <div className="movies__card">
      <img src={el.cover.url} height="174px" alt="" />
      <div className="carusel__card-bookmark">
        <img className="card-imagess" src={bookmarks} alt="" />
      </div>
      <div>
        <h3 className="mt-4  ">
          <img src={seriesLogo} alt="" />
        </h3>
        <h2 className="movies_card-title">{el.name}</h2>
      </div>
    </div>
  );
}

export default Card;
