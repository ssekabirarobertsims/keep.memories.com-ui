import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { useState } from "react";
import axios from "axios";
// import { FaDownload } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import PhotoViewComponent from "../components/Photo.View.Component";
import { AiOutlineSearch } from "react-icons/ai";

interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

function FilterBar() {
  const [searches, setSearches] = useState([] as Resource[]);
  const [inputValue, setInputValue] = useState("" as string);

  function handleClick(): void {
    window.location.href = "/";
  }

  return (
    <>
      <NavigationBarComponent />
      <section className={String("filter-bar")}>
        <div className="filter-bar-input-wrapper">
          <input
            type="search"
            name=""
            id="filter-bar-input"
            onInput={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setInputValue(
                  (event.target as HTMLInputElement).value as string
                );

                if ((event.target as HTMLInputElement).value === "") {
                  setSearches([]);
                } else {
                  setSearches(
                    response.filter((index: Resource) => {
                      return index.resource.includes(
                        (event.target as HTMLInputElement).value
                      );
                    })
                  );
                }
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
            placeholder="search photos here..."
            aria-placeholder="search photos here..."
          />
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                if (
                  (
                    window.document.querySelector(
                      "#filter-bar-input"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  setSearches([]);
                } else {
                  setSearches(
                    response.filter((index: Resource) => {
                      return index.resource_title.includes(
                        (
                          window.document.querySelector(
                            "#filter-bar-input"
                          ) as HTMLInputElement
                        ).value
                      );
                    })
                  );
                }
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            <AiOutlineSearch /> search
          </button>
        </div>
        <div className="filter-categories">
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(response);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
            style={{
              color: "#fff",
              backgroundColor: "hsl(0, 0%, 20%)",
            }}
          >
            All
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "dark";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Dark
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "people";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            People
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "sports";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Sports
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "nature";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Nature
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "food";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Food
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "illustrations";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Illustrations
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "technology";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Technology
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              try {
                const request = await axios.get(
                  "https://keep-memories-rest-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;
                setSearches(
                  response.filter((index: Resource) => {
                    return index.category === "animals";
                  })
                );
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");
              }
            }}
          >
            Animals
          </button>
          <button type="button" onClick={handleClick}>
            categories
          </button>
        </div>
        <h1>Photos from your searches: {inputValue as string}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque optio
          rem quidem fugiat voluptatum facere deleniti commodi! Debitis nesciunt
          eveniet eius voluptatem illo illum quam.
        </p>
        <br />
        <article>
          {searches.length > 0 ? (
            searches.map((result: Resource) => (
              <article
                className={String("photo_resource")}
                key={result.id}
                title={`Photo uploaded by ${result.resource_admin}`}
              >
                <img
                  src={`/uploads/${result.resource}`}
                  alt={`photo from ${result.category}`}
                  onClick={(event) => {
                    (
                      window.document.querySelector(
                        ".photo-view"
                      ) as HTMLElement
                    ).style.display = "flex";
                    (
                      window.document.querySelector(
                        ".img-placeholder"
                      ) as HTMLImageElement
                    ).src = (event.target as HTMLImageElement).src;
                  }}
                />
              </article>
            ))
          ) : (
            <div className="warning-results-message">
              <img
                src="/photos/search_webp.jpg"
                alt="photo"
                className="search_webp"
              />
              {/* <p className="search-results-message">There are no search results!</p> */}
            </div>
          )}
          <PhotoViewComponent />
        </article>
      </section>
      <br />
      <br />
      <FooterComponent />
    </>
  );
}

export default FilterBar;
