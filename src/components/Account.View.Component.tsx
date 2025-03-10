// import { MdAccountCircle } from "react-icons/md";
import React from "react";
import adminContext from "../context/adminContext";

interface AdminObject {
  email: string;
  username: string;
  userId: string | number;
  login_id: string | number;
}

type Admin = string;
import { FiLogOut } from "react-icons/fi";

const AccountViewComponent: React.FC = () => {
  const context: Admin = React.useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);

  return (
    <aside className="account-view-component">
      <div className="account-view-component-wrapper">
          <div className="account-description-content">
          <img src="/photos/placeholder.jpg" alt="" />
          <div>
          <span className={String("logged-in-username")}>
              {adminObject?.username ||
              typeof adminObject?.username !== "undefined"
                ? adminObject?.username
                : "username"}
          </span>
          <span className={String("logged-in-user-email")}>
              {adminObject?.email || typeof adminObject?.email !== "undefined"
                ? adminObject?.email
                : "example123@gmail.com"}
          </span>
          </div>
          </div>
         
          <br />
          <aside>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                window.setTimeout(() => {
                  window.localStorage.removeItem("admin");
                  window.location.href = "/account/login";
                }, 1500 as unknown as number);
              }}
            >
              log out <FiLogOut />
            </button>
          </aside>
      </div>
    </aside>
  );
};

export default AccountViewComponent;
