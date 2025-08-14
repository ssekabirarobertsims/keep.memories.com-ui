// import { FaSearch } from "react-icons/fa";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import LoggedInUserInformationObjectContent from "../context/UserContext";
import { AiOutlineSearch } from "react-icons/ai";
import AccountViewComponent from "./Account.View.Component";

interface ListItem {
  id: string | number;
  value: string;
  link: string;
}

import { TiThMenu } from "react-icons/ti";

interface User {
  login_id: string;
  date: string;
  request_id: string;
  error: unknown;
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
import { data } from "../json/Data.json";

const HeaderComponent: React.FC = () => {
  const context: UserContextType = React.useContext(
    LoggedInUserInformationObjectContent
  ) as UserContextType;
  const user: User = JSON.parse(context) as User;

  const [value, setValue] = React.useState<string>("" as string);
  const [filteredList, setFilteredList] = React.useState([] as ListItem[]);

  const [list, setList] = React.useState(data as unknown as ListItem[]);

  // cookies status
  const CookiesStatus: boolean = window.document.cookie.includes(
    "cookies-accepted"
  ) as boolean;

  return (
    <>
      <header className="application-header">
        <nav className={String("navigation-bar")}>
          <div className="logo">
            <h1>
              <Link
                to={{
                  pathname: "/",
                  search: `page=home&cookies=${CookiesStatus}`,
                }}
              >
                KeepMemories
              </Link>
            </h1>
          </div>
          <div className="xtz">
            <ul>
              <Link
                to={{
                  pathname: "/filter/searches",
                  search: `page=filter&query=search&cookies=${CookiesStatus}`,
                }}
              >
                <li>
                  <AiOutlineSearch />
                </li>
              </Link>
              <Link
                to={{
                  pathname: "/photos/categories/collection",
                  search: `page=collection&query=collection&cookies=${CookiesStatus}`,
                }}
              >
                <li>Explore</li>
              </Link>
              <Link
                to={{
                  pathname: "/newsletter/subscriptions",
                  search: `page=subscriptions&cookies=${CookiesStatus}`,
                }}
              >
                <li>subscribe</li>
              </Link>
              <Link
                to={{
                  pathname: user?.data ? "/" : "/account/login",
                  search: `page=login&cookies=${CookiesStatus}`,
                }}
              >
                <li>login</li>
              </Link>
              {user?.data ? (
                ""
              ) : (
                <Link
                  to={{
                    pathname: "/account/signup",
                    search: `page=signup&cookies=${CookiesStatus}`,
                  }}
                >
                  <li>signup</li>
                </Link>
              )}
            </ul>
            {user?.data ? (
              <img
                src="/photos/placeholder.jpg"
                alt=""
                className="account-view-button"
                onClick={(event) => {
                  event.stopPropagation();
                  (
                    window.document.querySelector(
                      ".account-view-component"
                    ) as HTMLElement
                  ).style.display = "flex";
                }}
                title={`logged in as ${JSON.parse(context).username}`}
              />
            ) : (
              ""
            )}
            <div className="dd-menu">
              <button
                type="button"
                className="dd-menu-button"
                onClick={(event) => {
                  event.stopPropagation();
                  (
                    window.document.querySelector(
                      ".dd-menu-content"
                    ) as HTMLElement
                  ).style.display = "flex";
                }}
              >
                <TiThMenu />
              </button>
              <aside className="dd-menu-content">
                <div>
                  <article>
                    <ul>
                      <Link to={{ pathname: "/filter/searches", search: `page=filter&query=search&cookies=${CookiesStatus}`, }}>
                        <li>
                          <AiOutlineSearch />
                        </li>
                      </Link>
                      <Link to={{ pathname: "/photos/categories/collection" }}>
                        <li>Explore</li>
                      </Link>
                      <Link to={{ pathname: "/newsletter/subscriptions" }}>
                        <li>subscribe</li>
                      </Link>
                      <Link
                        to={{ pathname: user?.data ? "/" : "/account/login" }}
                      >
                        <li>login</li>
                      </Link>
                      <Link
                        to={{ pathname: user?.data ? "/" : "/account/login" }}
                      >
                        <li>Collection</li>
                      </Link>
                      {user?.data ? (
                        ""
                      ) : (
                        <Link
                          to={{
                            pathname: "/account/signup",
                            search: `page=signup&cookies=${CookiesStatus}`,
                          }}
                        >
                          <li>signup</li>
                        </Link>
                      )}
                    </ul>
                  </article>
                </div>
              </aside>
            </div>
          </div>
        </nav>
        <AccountViewComponent />
        <article>
          <h1>Inspiring Free Photo Gallery</h1>
          <p>
            Every inspiring & favorite photo you need found in just one
            collection of photos.
          </p>
          <div className="search-input-wrapper">
            <span>
              <BiSearch />
            </span>
            <input
              type="search"
              name="search-bar"
              id="search-bar"
              placeholder="search by categories"
              aria-placeholder="search by categories"
              onInput={(event) => {
                event.stopPropagation();
                setValue((event.target as HTMLInputElement).value as string);
                (
                  window.document.querySelector(
                    ".search-list"
                  ) as HTMLUListElement
                ).style.display = "flex";

                setList(list);

                if (
                  list.length < 1 ||
                  (event.target as HTMLInputElement).value === "" ||
                  filteredList.length < 1
                ) {
                  setFilteredList([
                    {
                      id: uuid() as string,
                      value: `No Search Results Found For '${
                        (event.target as HTMLInputElement).value
                      }'`,
                      link: "",
                    },
                  ]);

                  (
                    window.document.querySelector(
                      ".search-list"
                    ) as HTMLUListElement
                  ).style.display = "none";
                } else {
                  setFilteredList(
                    list.filter((index: ListItem) => {
                      return index.value
                        .toLowerCase()
                        .includes(
                          (event.target as HTMLInputElement).value.toLowerCase()
                        );
                    })
                  );
                }
              }}
              value={value}
            />
          </div>
          <Link
            to={{
              pathname: "/filter/searches",
               search: `page=filter&query=search&cookies=${CookiesStatus}`,
            }}
          >
            <button type="button">
             Find In Searches
            </button>
          </Link>
          <ul className="search-list">
            {filteredList.length > 0
              ? filteredList.map((index: ListItem) => (
                  <Link
                    to={{
                      pathname: index.link,
                    }}
                    key={index.id as string}
                  >
                    <li>{index.value}</li>
                  </Link>
                ))
              : ""}
          </ul>
        </article>
      </header>
    </>
  );
};

export default HeaderComponent;
