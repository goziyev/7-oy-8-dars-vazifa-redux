import React from "react";
import "../Layout/index.css";
import Logo from "../../assets/Logo.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Movies from "../../assets/Shape-1.svg";
import Shape from "../../assets/Shape.svg";
import tv from "../../assets/tv.svg";
import search from "../../assets/search.svg";
import user from "../../assets/Oval.svg";
import { Navigate, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <div className="siedBar">
        <div className="wrapperSidebar">
          <div className="logo">
            <img width={32} src={Logo} alt="logo" />
          </div>
          <div className="icons">
            <img
              width={20}
              onClick={() => {
                navigate("/");
              }}
              src={Shape}
              alt="home icon"
            />
            <img width={20} src={Movies} onClick={() => {
              navigate("/series")
            }} alt="Shape icon" />
            <img width={20} src={tv} alt="Tv icon"  onClick={() => {
              navigate("/series")
            }} />
            <img width={20} src={Bookmark} alt="Book icon"  onClick={() => {
              navigate("/series")
            }} />
          </div>
        </div>
        <div className="user">
          <img
            src={user}
            alt="User"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/user");
            }}
          />
        </div>
      </div>
      <main>
        <header>
          <form className="search">
            <img src={search} alt="search-icon" />
            <input type="text" placeholder="Search for movies or TV series" />
          </form>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Layout;
