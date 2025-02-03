// import { FaCameraRetro } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import adminContext from "../context/adminContext";
import { AiOutlineSearch } from "react-icons/ai";
import LogoutAlertBox from "./Logout.Alert.Box.Component";
type Admin = string;
import AccountViewComponent from "./Account.View.Component";
// import { MdAccountCircle } from "react-icons/md";

const NavigationBarComponent: React.FC = () => {
  const context: Admin = React.useContext(adminContext) as Admin;
  const admin = JSON.parse(context);

  return (
    <>
      <nav className={String("navigation-bar")}>
        {/* <div>
          <h1>
            <Link
              to={{
                pathname: "/",
              }}
            >
              <img src="/photos/camera.jpg" alt="" />
            </Link>
          </h1>
        </div> */}
        <div className="xtz">
          <ul>
            <Link to={{ pathname: "/filter/searches" }}>
              <li>
                <AiOutlineSearch />
              </li>
            </Link>
            <Link to={{ pathname: "/photos/categories/all" }}>
              <li>Explore</li>
            </Link>
            <Link to={{ pathname: "/newsletter/subscriptions" }}>
              <li>subscribe</li>
            </Link>
            <Link to={{ pathname: admin ? "/" : "/login" }}>
              <li>login</li>
            </Link>
            {admin ? (
              ""
            ) : (
              <Link to={{ pathname: "/signup" }}>
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
        </div>
      </nav>
      <AccountViewComponent />
      <LogoutAlertBox />
    </>
  );
};

export default NavigationBarComponent;
