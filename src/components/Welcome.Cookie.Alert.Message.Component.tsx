import React, { useRef } from "react";
// if cookies not enabled, alert
// if button to allow cookie is clicked, then store state to storage
// to prevent the msg appear again after each reload

const WelcomeCookieAlertMessage: React.FC = () => {
  const buttonRef = useRef(null);
  const cookieState: boolean = true as boolean;
  const currentCookieState: string = window.localStorage.getItem(
    "cookies_allowed"
  ) as string;

  return JSON.parse(currentCookieState) !== (true as boolean) ||
    !JSON.parse(currentCookieState) ? (
    <>
      <aside className="welcome-cookie-alert-message-component">
        <div className="">
          <h1>Cookies Policy</h1>
          <p>
            This site uses cookies to continue functioning, allowing them will
            increase on its performance to its users. Please accept all Cookies
            to be used while you navigate through the site.
          </p>
          <br />
          <article>
            <button
              type="button"
              ref={buttonRef.current}
              onClick={(event) => {
                event.stopPropagation();
                window.localStorage.setItem(
                  "cookies_allowed",
                  JSON.stringify(cookieState as boolean)
                );

                (
                  window.document.querySelector(
                    ".welcome-cookie-alert-message-component"
                  ) as HTMLElement
                ).style.display = "none";
              }}
            >
              Accept All
            </button>
            <button
              type="button"
              ref={buttonRef.current}
              onClick={(event) => {
                event.stopPropagation();

                (
                  window.document.querySelector(
                    ".welcome-cookie-alert-message-component"
                  ) as HTMLElement
                ).style.display = "none";
              }}
            >
              Reject All
            </button>
          </article>
        </div>
      </aside>
    </>
  ) : (
    ""
  );
};

export default WelcomeCookieAlertMessage;
