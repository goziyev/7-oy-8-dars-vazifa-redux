import { useState, useEffect } from "react";
function Seris() {
  const [data, setData] = useState([]);
  const apiKey = "5YCYC3H-0D9M5AK-Q5R3PEM-SAY9TTD";
  useEffect(() => {
    fetch("https://api.kinopoisk.dev/v1.4/movie?type=tv-series", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.docs))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.map((el) => {
            return (
              <div
                onClick={() => {
                  hendalClick(el);
                }}
                class="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={el.backdrop.url}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-100 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-100 truncate title-font text-lg font-medium">
                    {el.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Seris;