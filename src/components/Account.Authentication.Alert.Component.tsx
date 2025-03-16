import React from "react";
import { Link } from "react-router-dom";
import LoggedInUserInformationObjectContent from "../context/UserContext";
type User = string;

const AccountAuthenticationAlertComponent: React.FunctionComponent =
  (): any => {
    const context: User = React.useContext(
      LoggedInUserInformationObjectContent
    ) as User;
    const user = JSON.parse(context);

    return user ? (
      ""
    ) : (
      <>
        <aside className="account-authentication-alert-component">
          <div className="account-authentication-alert-component-wrapper">
            <article className="photo-authentication-alert-component">
              <img
                src="/photos/abstract-portrait-with-light-effects_23-2151118109.jpg"
                alt="abstract background photo for keep memories photo gallery."
              />
            </article>
            <article>
              <h1>Create an account</h1>
              <p></p>
              <p></p>
              <Link
                to={{
                  pathname: "/account/signup",
                }}
              >
                <button type="button">Create Account</button>
              </Link>

              <Link
                to={{
                  pathname: "/account/login",
                }}
              >
                <button type="button">Log Into Account</button>
              </Link>
              <p></p>

              <Link
                to={{
                  pathname: "/newsletter/subscriptions",
                }}
              >
                subscribe
              </Link>
            </article>
          </div>
        </aside>
      </>
    );
  };

export default AccountAuthenticationAlertComponent;
