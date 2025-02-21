import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { useState, useContext, useRef } from "react";
import axios from "axios";
// import { FaDownload } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import PhotoViewComponent from "../components/Photo.View.Component";
import { AiOutlineSearch } from "react-icons/ai";
import ScrollGalleryComponent from "../components/Scroll.Gallery.Component";
import adminContext from "../context/adminContext";
import AdvertComponent from "../components/Advert.Component";

interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

interface AdminObject {
  login_id: string;
  username: string;
  email: string;
  token: string;
  message: string;
  status: string;
  signedUp: boolean | string;
  date: string;
}

type Admin = string;

import FilterBarSimilarSearchesComponent from "../components/Filter.Bar.Similar.Searches.Component";
import { v4 as uuid } from "uuid";
import WelcomeCookieAlertMessage from "../components/Welcome.Cookie.Alert.Message.Component";
import { BsArrowUp } from "react-icons/bs";

function FilterBar() {
  const context: Admin = useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);

  const [searches, setSearches] = useState([
    {
      id: uuid() as string,
      resource: "tech-gadgets-with-white-background.jpg",
      category: "",
      resource_admin: "",
      resource_id: uuid() as string,
      resource_title: "",
      upload_date: "",
    },
    {
      id: uuid() as string,
      resource: "tech-gadgets-with-yellow-background.jpg",
      category: "",
      resource_admin: "",
      resource_id: uuid() as string,
      resource_title: "",
      upload_date: "",
    },
    {
      id: uuid() as string,
      resource:
        "tech-entrepreneur-machine-learning-engineer-illustration_1297153-24209.jpg",
      category: "",
      resource_admin: "",
      resource_id: uuid() as string,
      resource_title: "",
      upload_date: "",
    },
  ] as Resource[]);
  const [inputValue, setInputValue] = useState("" as string);
  const searchInputRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <>
      <NavigationBarComponent />
      <section className={String("filter-bar")}>
        <div className="filter-bar-input-wrapper">
          <AiOutlineSearch />
          <input
            ref={searchInputRef.current}
            type="search"
            name=""
            id="filter-bar-input"
            onInput={async (event) => {
              // add debounce for the input search

              event.stopPropagation();
              (
                window.document.querySelector(
                  ".search-bar-input-value"
                ) as HTMLSpanElement
              ).textContent =
                inputValue || (event.target as HTMLInputElement).value;

              setTimeout(() => {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";
              }, 1000 as number);

              try {
                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
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
                  setTimeout(() => {
                    (
                      window.document.querySelector(
                        ".search-bar-spinner-wrapper"
                      ) as HTMLElement
                    ).style.display = "none";

                    setSearches(
                      response.filter((index: Resource) => {
                        return index.resource.includes(
                          (
                            event.target as HTMLInputElement
                          ).value.toLocaleLowerCase()
                        );
                      })
                    );
                  }, 1500 as number);
                }
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";
                }, 1500 as number);
              }
            }}
            placeholder="search photos here..."
            aria-placeholder="search photos here..."
          />
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();
              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
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
                  setTimeout(() => {
                    (
                      window.document.querySelector(
                        ".search-bar-spinner-wrapper"
                      ) as HTMLElement
                    ).style.display = "none";

                    (event.target as HTMLButtonElement).disabled = Boolean(
                      false
                    ) as boolean;

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
                  }, 5000 as number);
                }
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            <AiOutlineSearch /> search
          </button>
        </div>
        <FilterBarSimilarSearchesComponent />
        <div className="filter-categories">
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;
                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(response);

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
            style={{
              color: "#fff",
              backgroundColor: "hsl(0, 0%, 20%)",
            }}
          >
            All Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "dark";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Dark Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;
                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "people";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            People Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "sports";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Sports Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "nature";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Nature Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "illustrations";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Illustration Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "technology";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Tech Photos
          </button>
          <button
            type="button"
            onClick={async (event) => {
              event.stopPropagation();

              (event.target as HTMLButtonElement).disabled = Boolean(
                true
              ) as boolean;

              try {
                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                const request = await axios.get(
                  "https://keep-memories-com-api.onrender.com/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${adminObject?.token}`,
                    },
                  }
                );

                const response = await request.data;

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;

                  setSearches(
                    response.filter((index: Resource) => {
                      return index.category === "animals";
                    })
                  );
                }, 5000 as number);
              } catch (error) {
                console.log(error);
                console.warn("Connection to server was lost...");
                console.warn("Reconnecting to server...");
                console.warn("Connecting...");

                (
                  window.document.querySelector(
                    ".search-bar-spinner-wrapper"
                  ) as HTMLElement
                ).style.display = "flex";

                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  (event.target as HTMLButtonElement).disabled = Boolean(
                    false
                  ) as boolean;
                }, 5000 as number);
              }
            }}
          >
            Wildlife Photos
          </button>
        </div>
        <h1>
          Showing results for:{" "}
          <strong className="search-bar-input-value"></strong>
        </h1>
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
                <div className="before_wrapper">
                  <a href={`/uploads/${result.resource}`} download>
                    <button type="button">
                      <LuDownload />
                    </button>
                  </a>
                </div>
                <img
                  src={`/uploads/${result.resource}`}
                  alt={`photo from ${result.category}`}
                  onClick={(event) => {
                    event.stopPropagation();

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
            </div>
          )}
        </article>
        <div className="search-bar-spinner-wrapper">
          <div className="spinner"></div>
        </div>
      </section>
      <br />
      {searches.length > 0 ? (
        <span className="found-searches-content-length">
          Found {searches?.length ? searches?.length : (0 as unknown as number)}{" "}
          photos from searches
        </span>
      ) : (
        ""
      )}
      <br />
      <br />
      <a href="/filter/searches#">
        <button
          type="button"
          className="navigation-upper-scroll-button"
          ref={buttonRef}
        >
          <BsArrowUp />
        </button>
      </a>
      <ScrollGalleryComponent />
      <PhotoViewComponent />
      <AdvertComponent />
      <WelcomeCookieAlertMessage />
      <FooterComponent />
    </>
  );
}

export default FilterBar;
