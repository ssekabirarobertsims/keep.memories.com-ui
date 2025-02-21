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
        <article className="account-description">
          <img src="/photos/placeholder.jpg" alt="" />
          <br />
          <span>
            Login Id:{" "}
            <strong>
              {adminObject?.login_id ||
              typeof adminObject?.login_id !== "undefined"
                ? `login${adminObject?.login_id}`
                : "login23927101"}
            </strong>
          </span>
          <span>
            Username:{" "}
            <strong>
              {adminObject?.username ||
              typeof adminObject?.username !== "undefined"
                ? adminObject?.username
                : "no-username"}
            </strong>
          </span>
          <span>
            Email:{" "}
            <strong>
              {adminObject?.email || typeof adminObject?.email !== "undefined"
                ? adminObject?.email
                : "no-email"}
            </strong>
          </span>
          <span>
            Premium User: <strong>Not Premium</strong>
          </span>
          <br />
          <aside>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                (
                  window.document.querySelector(
                    ".logout-alert-box"
                  ) as HTMLElement
                ).style.display = "flex";
              }}
            >
              log out <FiLogOut />
            </button>
          </aside>
        </article>
      </div>
    </aside>
  );
};

export default AccountViewComponent;
