import { Link } from "react-router-dom";
import Signup from "../functions/Signup";

function SignupPage() {
  return (
    <>
      <section className={String("signup-section-page")}>
        <aside className="__wrapper">
          <form action="" method="post">
            <h1>Signup</h1>
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
            <div>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();

                  const loginAlertMessage: HTMLElement =
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
                    loginAlertMessage.textContent = "All fields are required";
                  } else if (
                    (
                      window.document.querySelector(
                        "#password"
                      ) as HTMLInputElement
                    ).value === ""
                  ) {
                    loginAlertMessage.textContent = "All fields are required";
                  } else if (
                    (
                      window.document.querySelector(
                        "#email"
                      ) as HTMLInputElement
                    ).value === ""
                  ) {
                    loginAlertMessage.textContent = "All fields are required";
                  } else {
                    // no worries about this, its warning buh wont cause any trouble loading the app
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
              <Link
                to={{
                  pathname: "/login",
                }}
              >
                <button type="button">Login</button>
              </Link>
            </div>
          </form>
        </aside>
      </section>
    </>
  );
}

export default SignupPage;
