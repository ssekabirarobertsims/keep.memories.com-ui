import { Link } from "react-router-dom";
import Signup from "../functions/Signup";

function SignupPage() {
  return (
    <>
      <section className={String("signup-section-page")}>
        <aside className="__wrapper">
          <img
            src="/photos/blue-light-portrait-background_23-2149594607.jpg"
            alt=""
          />
          <div>
            <article>
              <h1>Sign Up</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                repellat molestias dolor quibusdam voluptatem. Quidem molestiae
                impedit culpa minima praesentium!
              </p>
              <span>
                keep memories photo gallery ©right 2024-2025 rights reserved
              </span>
            </article>
          </div>
        </aside>

        <form action="" method="post">
          <article className="signup-form-wrapper">
            <h1>Create an account</h1>
            <br />
            <p>
              Sign up to get access to our collection of photos and get inspired
              by the beauty of nature and the world at large.
            </p>
            <br />
            <span className="signup-alert-message"></span>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              aria-placeholder="username"
              required
              aria-required
            />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              aria-placeholder="email"
              required
              aria-required
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
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
                    const password: HTMLInputElement =
                      window.document.querySelector(
                        "#password"
                      ) as HTMLInputElement;
                    password.type = "text";
                  } else {
                    const password: HTMLInputElement =
                      window.document.querySelector(
                        "#password"
                      ) as HTMLInputElement;
                    password.type = "password";
                  }
                }}
              />
              <label htmlFor="show-password">show password</label>
            </article>
            <br />
            <p>
              Already have an account?{" "}
              <Link
                to={{
                  pathname: "/account/login",
                }}
              >
                login
              </Link>
            </p>
            <br />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();

                const signupAlertMessage: HTMLElement =
                  window.document.querySelector(
                    ".signup-alert-message"
                  ) as HTMLElement;

                if (
                  (
                    window.document.querySelector(
                      "#username"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  signupAlertMessage.textContent = "All fields are required!";
                  signupAlertMessage.style.display = "flex";
                } else if (
                  (
                    window.document.querySelector(
                      "#password"
                    ) as HTMLInputElement
                  ).value === ""
                ) {
                  signupAlertMessage.textContent = "All fields are required!";
                  signupAlertMessage.style.display = "flex";
                } else if (
                  (window.document.querySelector("#email") as HTMLInputElement)
                    .value === ""
                ) {
                  signupAlertMessage.textContent = "All fields are required!";
                  signupAlertMessage.style.display = "flex";
                } else {
                  // no worries about this, its warning buh wont cause any trouble loading the app
                  (
                    window.document.querySelector(
                      ".signup-spinner-wrapper"
                    ) as HTMLDivElement
                  ).style.display = "flex";

                  Signup(
                    (
                      window.document.querySelector(
                        "#username"
                      ) as HTMLInputElement
                    ).value,
                    (
                      window.document.querySelector(
                        "#email"
                      ) as HTMLInputElement
                    ).value,
                    (
                      window.document.querySelector(
                        "#password"
                      ) as HTMLInputElement
                    ).value
                  );
                }
              }}
            >
              Signup
            </button>
          </article>
        </form>
        <div className="signup-spinner-wrapper">
          <div className="spinner"></div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
