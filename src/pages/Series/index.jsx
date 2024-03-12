import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "../../components/card";
import CaruselCard from "../../components/caruselCard";
export default function Home() {
  const [data, setData] = useState([]);
  let [reck, setreck] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    const apiKey = "5YCYC3H-0D9M5AK-Q5R3PEM-SAY9TTD";
    fetch("https://api.kinopoisk.dev/v1.4/series?lists=top250", {
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
  return (
    <>
      <div>
        <h2>Series</h2>
        <div className="carousel carousel-center w-full p-2  to-transparent rounded-box gap-6 ">
          {reck.map((el, index) => {
            return <CaruselCard key={index} el={el} />;
          })}
        </div>
        <div className="content-main">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-14 mx-auto">
              <div className="flex flex-wrap gap-8">
                {reck.map((el, index) => {
                  return <Card key={index} el={el} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
