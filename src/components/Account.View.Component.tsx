import React from "react";
import LoggedInUserInformationObjectContent from "../context/UserContext";

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
import { FiLogOut } from "react-icons/fi";

const AccountViewComponent: React.FC = () => {
  const context: UserContextType = React.useContext(
    LoggedInUserInformationObjectContent
  ) as UserContextType;
  const LoggedInUserInformationObject: User = JSON.parse(context);

  return (
    <aside className="account-view-component">
      <div className="account-view-component-wrapper">
        <div className="account-description-content">
          <img src="/photos/placeholder.jpg" alt="" />
          <div>
            <span className={String("logged-in-username")}>
              {LoggedInUserInformationObject?.data?.username ||
              typeof LoggedInUserInformationObject?.data?.username !==
                "undefined"
                ? LoggedInUserInformationObject?.data?.username
                : "username"}
            </span>
            <span className={String("logged-in-user-email")}>
              {LoggedInUserInformationObject?.data?.email ||
              typeof LoggedInUserInformationObject?.data?.email !== "undefined"
                ? LoggedInUserInformationObject?.data?.email
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
                window.localStorage.removeItem("user");
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
