// import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Message {
  message: string;
}

const CodeValidationForm: React.FC = () => {
  const [code, setCode] = useState("" as number | string);

  async function sendCode() {
    try {
      const request = await fetch(
        "https://keep-memories-com-api.onrender.com/account/verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            code: code as string | number,
          }),
        }
      );

      const response: Required<Pick<Message, "message">> =
        (await request.json()) as Required<Pick<Message, "message">>;

      if (request.ok) {
        (
          window.document.querySelector(".request-response") as HTMLSpanElement
        ).textContent = response.message as string;
        window.location.href = "/signup/account/verification/status";
      } else {
        (
          window.document.querySelector(".request-response") as HTMLSpanElement
        ).textContent = response.message as string;
        return;
      }
    } catch (error) {
      console.log(error);
      console.log("Connection to server lost...");
      console.log("Reconnection to server...");
    }
  }

  return (
    <section className={String("email-validation")}>
      <article>
        <form action="" encType="" acceptCharset="utf8" method="POST">
          <h1>Verify Account</h1>
          <span className="request-response"></span>
          <aside>
            <input
              type="number"
              name="code"
              id="code"
              onChange={(event) => {
                setCode((event.target as HTMLInputElement).value);
              }}
              value={code}
              maxLength={100 as number}
              required
              aria-required
              placeholder="Enter code"
              aria-placeholder="Enter code"
            />
          </aside>
          <p>
            Did not get code,{" "}
            <Link
              to={{
                pathname: "/signup",
              }}
            >
              signup again with a correct email address
            </Link>
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              sendCode();
            }}
          >
            Verify
          </button>
        </form>
      </article>
    </section>
  );
};

export default CodeValidationForm;
