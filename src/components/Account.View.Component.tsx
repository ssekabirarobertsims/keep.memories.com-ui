// import { MdAccountCircle } from "react-icons/md";
import React from "react";
import adminContext from "../context/adminContext";

interface AdminObject {
  email: string;
  username: string;
  userId: string | number;
}

type Admin = string;

function AccountViewComponent() {
  const context: Admin = React.useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);

  return (
    <aside className="account-view-component">
      <div className="account-view-component-wrapper">
        <article className="account-description">
          <h2>Logged in user</h2>
          <br />
          <span>
            {adminObject?.userId || typeof adminObject?.userId !== "undefined"
              ? `user${adminObject?.userId}`
              : "user23927101"}
          </span>
          <span>
            {adminObject?.username ||
            typeof adminObject?.username !== "undefined"
              ? adminObject?.username
              : "no-username"}
          </span>
          <span>
            {adminObject?.email || typeof adminObject?.email !== "undefined"
              ? adminObject?.email
              : "no-email"}
          </span>
          <br />
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
            log out
          </button>
        </article>
      </div>
    </aside>
  );
}

export default AccountViewComponent;
