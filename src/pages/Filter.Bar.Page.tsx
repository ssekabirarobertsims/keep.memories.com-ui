import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import React, { useState, useContext, useRef } from "react";
import axios from "axios";
// import { FaDownload } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import PhotoViewComponent from "../components/Photo.View.Component";
import { AiOutlineSearch } from "react-icons/ai";
import ScrollGalleryComponent from "../components/Scroll.Gallery.Component";
import LoggedInUserInformationObjectContent from "../context/UserContext";
import AdvertComponent from "../components/Subscription.Advert.Component";

interface Resource {
  id: string | number;
  resource_id: string;
  resource: string;
  category: string;
  resource_title: string;
}

interface User {
  login_id: string;
  date: string;
  request_id: string;
  error: any;
  request_status: number;
  data: {
    username: string;
    email: string;
    token: string;
    message: string;
    status: string;
    signedUp: boolean;
  };
}

type UserContextType = string;
import OfflineMessageComponent from "../components/Offline.Message.Component";

import FilterBarSimilarSearchesComponent from "../components/Filter.Bar.Similar.Searches.Component";
import { v4 as uuid } from "uuid";
import WelcomeCookieAlertMessage from "../components/Welcome.Cookie.Alert.Message.Component";
import AccountAuthenticationAlertComponent from "../components/Account.Authentication.Alert.Component";

const FilterBar: React.FunctionComponent = (): any => {
  const context: UserContextType = useContext(
    LoggedInUserInformationObjectContent
  ) as UserContextType;
  const LoggedInUserInformationObject: User = JSON.parse(context);

  const [searches, setSearches] = useState([
    {
      id: uuid() as string,
      resource: "man-walking-toward-light-end-tunnel_1353-49.jpg",
      category: "dark-photos",
      resource_id: uuid() as string,
      resource_title: "",
    },
    {
      id: uuid() as string,
      resource: "little-boat-dark_181624-474.jpg",
      category: "dark-photos",
      resource_id: uuid() as string,
      resource_title: "",
    },
    {
      id: uuid() as string,
      resource: "pack-cigarettes-glass-coffee_181624-518.jpg",
      category: "dark-photos",
      resource_id: uuid() as string,
      resource_title: "",
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

                setInputValue(
                  (event.target as HTMLInputElement).value as string
                );

                if ((event.target as HTMLInputElement).value === "") {
                  setSearches([] as Resource[]);
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

                if (
                  (
                    window.document.querySelector(
                      "#filter-bar-input"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  setSearches([] as Resource[]);
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;
                setTimeout(() => {
                  (
                    window.document.querySelector(
                      ".search-bar-spinner-wrapper"
                    ) as HTMLElement
                  ).style.display = "none";

                  setSearches(response as Resource[]);

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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

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
                    }) as Resource[]
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;
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
                    }) as Resource[]
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

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
                    }) as Resource[]
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

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
                    }) as Resource[]
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

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
                    }) as Resource[]
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
            ref={buttonRef.current}
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
                  "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
                  {
                    headers: {
                      Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
                    },
                  }
                );

                const response = await request.data?.data;

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
                    }) as Resource[]
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
          <div className="search-bar-spinner-wrapper">
            <div className="spinner"></div>
          </div>
          {searches.length > 0 ? (
            searches.map((result: Resource) => (
              <article
                className={String("photo_resource")}
                key={result.resource_id}
                title={`Photo from ${result.category}`}
              >
                <div className="before_wrapper">
                  <a href={`/uploads/${result.resource}`} download>
                    <button type="button" ref={buttonRef.current}>
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

                    const selectedPhotoCollectionURL = document.querySelector(
                      ".selected-photo-category-collection-link"
                    ) as HTMLAnchorElement;

                    selectedPhotoCollectionURL.href = `/photos/categories/${result.category}`;
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
      <ScrollGalleryComponent />
      <PhotoViewComponent />
      <OfflineMessageComponent />
      <AdvertComponent />
      <AccountAuthenticationAlertComponent />
      <WelcomeCookieAlertMessage />
      <FooterComponent />
    </>
  );
};

export default FilterBar;
