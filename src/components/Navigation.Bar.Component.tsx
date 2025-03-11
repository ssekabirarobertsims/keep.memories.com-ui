import React from "react";
import { Link } from "react-router-dom";
import adminContext from "../context/adminContext";
import { AiOutlineSearch } from "react-icons/ai";
import LogoutAlertBox from "./Logout.Alert.Box.Component";
type Admin = string;
import AccountViewComponent from "./Account.View.Component";
import { TiThMenu } from "react-icons/ti";

const NavigationBarComponent: React.FC = () => {
  const context: Admin = React.useContext(adminContext) as Admin;
  const admin = JSON.parse(context);

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
            <Link to={{ pathname: admin ? "/" : "/account/login" }}>
              <li>login</li>
            </Link>
            {admin ? (
              ""
            ) : (
              <Link to={{ pathname: "/account/signup" }}>
                <li>signup</li>
              </Link>
            )}
          </ul>
          {admin ? (
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
                    <Link to={{ pathname: admin ? "/" : "/account/login" }}>
                      <li>login</li>
                    </Link>
                    <Link to={{ pathname: admin ? "/" : "/account/login" }}>
                      <li>Collection</li>
                    </Link>
                    {admin ? (
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
      <LogoutAlertBox />
    </>
  );
};

export default NavigationBarComponent;
