import { Link } from "react-router-dom";
import Login from "../functions/Login";

function LoginPage() {
  return (
    <>
      <section className="login-section-page">
        <aside className="__wrapper">
          <img
            src="/photos/blue-light-background-portrait_52683-91429.jpg"
            alt=""
          />
          <div>
            <article>
              <h1>Login</h1>
              <p>
                Log into your account if you have registered account to continue
                with the best experience for the sit quibusdam voluptatem.
                Quidem molestiae impedit culpa minima.
              </p>
              <span>
                keep memories photo gallery ©right 2024-2025 rights reserved
              </span>
            </article>
          </div>
        </aside>

        <form action="" method="post">
          <article className="login-form-wrapper">
            <h1>Log into an account</h1>
            <br />
            <p>
              Login to get access to our collection of photos and get inspired
              by the beauty of nature and the world at large.
            </p>
            <br />
            <span className="login-alert-message"></span>
            <br />
            <input
              type="email"
              name="login-email"
              id="login-email"
              placeholder="email"
              aria-placeholder="email"
              required
              aria-required
            />
            <br />
            <input
              type="password"
              name="login-password"
              id="login-password"
              placeholder="password"
              aria-placeholder="password"
              required
              aria-required
            />
            <br />
            <article>
              <input
                type="checkbox"
                name="show-password"
                id="show-password"
                onChange={(event) => {
                  event.stopPropagation();
                  if (event.target.checked) {
                    (
                      window.document.querySelector(
                        "#login-password"
                      ) as HTMLInputElement
                    ).type = "text";
                  } else {
                    (
                      window.document.querySelector(
                        "#login-password"
                      ) as HTMLInputElement
                    ).type = "password";
                  }
                }}
              />
              <label htmlFor="show-password">show password</label>
            </article>
            <br />
            <p>
              Do not have an account?{" "}
              <Link
                to={{
                  pathname: "/account/signup",
                }}
              >
                signup
              </Link>
            </p>
            <br />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                const loginAlertMessage: HTMLElement =
                  window.document.querySelector(
                    ".login-alert-message"
                  ) as HTMLElement;

                if (
                  (
                    window.document.querySelector(
                      "#login-email"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  loginAlertMessage.textContent = "All fields are required!";
                  loginAlertMessage.style.display = "flex";
                } else if (
                  (
                    window.document.querySelector(
                      "#login-password"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  loginAlertMessage.textContent = "All fields are required!";
                  loginAlertMessage.style.display = "flex";
                } else {
                  // no worries about this, its warning buh wont cause any trouble loading the app
                  (
                    window.document.querySelector(
                      ".login-spinner-wrapper"
                    ) as HTMLDivElement
                  ).style.display = "flex";

                  Login(
                    (
                      window.document.querySelector(
                        "#login-email"
                      ) as HTMLInputElement
                    ).value,
                    (
                      window.document.querySelector(
                        "#login-password"
                      ) as HTMLInputElement
                    ).value
                  );
                }
              }}
            >
              Login
            </button>
          </article>
        </form>
        <div className="login-spinner-wrapper">
          <div className="spinner"></div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
