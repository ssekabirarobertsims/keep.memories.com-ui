import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { useState } from "react";
import axios from "axios";
// import { FaDownload } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import PhotoViewComponent from "../components/Photo.View.Component";
import { AiOutlineSearch } from "react-icons/ai";
import ScrollGalleryComponent from "../components/Scroll.Gallery.Component";
import LoaderComponent from "../components/Loader.Component";

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

  return (
    <>
      <NavigationBarComponent />
      <br />
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
                  "https://keep-memories-com-api.onrender.com/resources",
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
                        (
                          event.target as HTMLInputElement
                        ).value.toLocaleLowerCase()
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
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
                  window.setTimeout(() => {
                    (
                      window.document.querySelector(
                        ".loader-component"
                      ) as HTMLElement
                    ).style.display = "none";

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
                  }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(response);
                }, 6000 as number);
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
            Collection
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "dark";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "people";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setInterval(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "sports";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "nature";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "illustrations";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "technology";
                    })
                  );
                }, 6000 as number);
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
              (
                window.document.querySelector(
                  ".loader-component"
                ) as HTMLElement
              ).style.display = "flex";

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: "",
                    },
                  }
                );

                const response = await request.data;

                window.setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".loader-component"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "animals";
                    })
                  );
                }, 6000 as number);
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
        </div>
        <h1>Photos from your searches: {inputValue as string}</h1>
        <p>
          Try to make your search more specific to get the best results. For
          example, if you are looking for a photo of a dog, you can search for
          "dog" or "dogs" to get the best results for your search.
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
                src="/photos/curious-concept-illustration_114360-2185.jpg"
                alt="photo"
                className="search_webp"
              />
              {/* <p className="search-results-message">There are no search results!</p> */}
            </div>
          )}
          <PhotoViewComponent />
        </article>
      </section>
      <LoaderComponent />
      <ScrollGalleryComponent />
      <FooterComponent />
    </>
  );
}

export default FilterBar;
