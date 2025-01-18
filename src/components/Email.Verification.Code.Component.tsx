// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Message {
  message: string;
}

function CodeValidationForm() {
  const [digit1, setDigit1] = useState("" as number | string);
  const [digit2, setDigit2] = useState("" as number | string);
  const [digit3, setDigit3] = useState("" as number | string);
  const [digit4, setDigit4] = useState("" as number | string);

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
            a: digit1 as string | number,
            b: digit2 as string | number,
            c: digit3 as string | number,
            d: digit4 as string | number,
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
              type="text"
              name="digit_1"
              id="digit_1"
              onChange={(event) => {
                setDigit1((event.target as HTMLInputElement).value);
              }}
              value={digit1}
              maxLength={1 as number}
              required
              aria-required
            />
            <input
              type="text"
              name="digit_2"
              id="digit_2"
              onChange={(event) => {
                setDigit2((event.target as HTMLInputElement).value);
              }}
              value={digit2}
              maxLength={1 as number}
              required
              aria-required
            />
            <input
              type="text"
              name="digit_3"
              id="digit_3"
              onChange={(event) => {
                setDigit3((event.target as HTMLInputElement).value);
              }}
              value={digit3}
              maxLength={1 as number}
              required
              aria-required
            />
            <input
              type="text"
              name="digit_4"
              id="digit_4"
              onChange={(event) => {
                setDigit4((event.target as HTMLInputElement).value);
              }}
              value={digit4}
              maxLength={1 as number}
              required
              aria-required
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
}

export default CodeValidationForm;
