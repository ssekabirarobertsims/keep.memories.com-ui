import { Link } from "react-router-dom";
import Login from "../functions/Login";

function LoginPage() {
  return (
    <>
      <section className="login-section-page">
        <aside className="__wrapper">
          <form action="" method="post">
            <h1>Login</h1>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
              saepe eveniet enim? Dolor est facilis qui amet? Animi, laborum
              tenetur!
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
            <br />
            <br />
            <div>
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
                    loginAlertMessage.textContent = "All fields are required";
                  } else if (
                    (
                      window.document.querySelector(
                        "#login-password"
                      ) as HTMLInputElement
                    ).value === ""
                  ) {
                    loginAlertMessage.textContent = "All fields are required";
                  } else {
                    // no worries about this, its warning buh wont cause any trouble loading the app
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
              <Link
                to={{
                  pathname: "/signup",
                }}
              >
                <button type="button">signup</button>
              </Link>
            </div>
          </form>
        </aside>
      </section>
    </>
  );
}

export default LoginPage;
