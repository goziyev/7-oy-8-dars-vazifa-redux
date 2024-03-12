import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "../../components/card";
import CaruselCard from "../../components/caruselCard";

import "../Layout/index.css";
import Logo from "../../assets/Logo.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Movies from "../../assets/Shape-1.svg";
import Shape from "../../assets/Shape.svg";
import tv from "../../assets/tv.svg";
import search from "../../assets/search.svg";
import user from "../../assets/Oval.svg";
import {useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  let [reck, setreck] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const [searchL, setSearchL] = useState(false);
  const apiKey = "5YCYC3H-0D9M5AK-Q5R3PEM-SAY9TTD";
  useEffect(() => {
    setLoader(true);
    fetch("https://api.kinopoisk.dev/v1.4/movie?lists=top250", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((el) => {
        setData(el.docs);
        setLoader(false);
      })
      .catch((error) => console.error("Error:", error));

    fetch("https://api.kinopoisk.dev/v1.4/list?page=4&limit=20", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((el) => setreck(el.docs))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(reck);

  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      if (inputValue.trim() !== "") {
        fetch(
          `https://api.kinopoisk.dev/v1.4/movie/search?query=${inputValue}`,
          {
            headers: {
              "X-API-KEY": apiKey,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setreck(data.docs);
            console.log(data.docs);
            setSearchL(true);
          })
          .catch((error) => console.error("Fetchda xatolik:", error));
      }
    }, 3000);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
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
              <img
                width={20}
                src={Movies}
                onClick={() => {
                  navigate("/");
                }}
                alt="Shape icon"
              />
              <img
                width={20}
                src={tv}
                alt="Tv icon"
                onClick={() => {
                  navigate("/series");
                }}
              />
              <img
                width={20}
                src={Bookmark}
                alt="Book icon"
                onClick={() => {
                  navigate("/series");
                }}
              />
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
              <input
                type="text"
                onChange={handleChange}
                value={inputValue}
                placeholder="Search for movies or TV series"
              />
            </form>
          </header>
          <div>
            <h2>Trending</h2>
            {searchL ? (
              ""
            ) : (
              <div className="carousel carousel-center w-full p-2  to-transparent rounded-box gap-6 ">
                {reck.map((el, index) => {
                  return <CaruselCard key={index} el={el} />;
                })}
              </div>
            )}
            <div className="content-main">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                  <div className="flex flex-wrap gap-9">
                    {searchL
                      ? reck.map((el, index) => {
                          return (
                            <div
                              key={index}
                              className="lg:w-1/4 md:w-1/2 p-4 w-full"
                            >
                              <a className="block relative h-48 rounded overflow-hidden">
                                <img
                                  alt="ecommerce"
                                  className="object-cover object-center w-full h-full block"
                                  src={el.backdrop.url}
                                />
                              </a>
                              <div className="mt-4">
                                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
                                  CATEGORY
                                </h3>
                                <h2 className="text-gray-100 truncate title-font text-lg font-medium">
                                  {el.name}
                                </h2>
                              </div>
                            </div>
                          );
                        })
                      : reck.map((el, index) => {
                          return <Card key={index} el={el} />;
                        })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
