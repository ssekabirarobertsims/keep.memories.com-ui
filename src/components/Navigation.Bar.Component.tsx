import React from "react";
import { Link } from "react-router-dom";
import LoggedInUserInformationObjectContent from "../context/UserContext";
import { AiOutlineSearch } from "react-icons/ai";
import AccountViewComponent from "./Account.View.Component";
import { TiThMenu } from "react-icons/ti";

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

const NavigationBarComponent: React.FC = (): any => {
  const context: UserContextType = React.useContext(
    LoggedInUserInformationObjectContent
  );
  const user: User = JSON.parse(context) as User;

  return (
    <>
      <nav className={String("navigation-bar")}>
        <div className="logo">
          <h1>
            <Link
              to={{
                pathname: "/",
              }}
            >
              KeepMemories
            </Link>
          </h1>
        </div>
        <div className="xtz">
          <ul>
            <Link to={{ pathname: "/filter/searches" }}>
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
            <Link to={{ pathname: user?.data ? "/" : "/account/login" }}>
              <li>login</li>
            </Link>
            {user?.data ? (
              ""
            ) : (
              <Link to={{ pathname: "/account/signup" }}>
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
                    <Link to={{ pathname: "/filter/searches" }}>
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
                      <Link to={{ pathname: "/account/signup" }}>
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
    </>
  );
};

export default NavigationBarComponent;
