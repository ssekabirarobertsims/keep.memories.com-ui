import axios from "axios";
import React, { useState } from "react";

const NewsletterComponent: React.FunctionComponent = () => {
  const [email, setEmail] = useState("" as string);

  async function HandleButtonClick() {
    const request = await axios.post(
      "https://keep-memories-photo-gallery-api-service.onrender.com/newsletter/api/user/account/newsletter/subscription",
      {
        email: email,
      }
    );

    const response = await request.data;

    try {
      if (request.status) {
        (
          window.document.querySelector(
            ".newsletter-response-message"
          ) as HTMLSpanElement
        ).textContent = response.message as string;
        window.setTimeout(() => {
          window.location.href = "/email/newsletter/subscription/verification";
          return response;
        }, 2000 as number);
      } else {
        (
          window.document.querySelector(
            ".newsletter-response-message"
          ) as HTMLSpanElement
        ).textContent = response.message as string;
        return response;
      }
    } catch (error) {
      (
        window.document.querySelector(
          ".newsletter-response-message"
        ) as HTMLSpanElement
      ).textContent = "Please fill in required information!";
      console.log(error);
    }
  }

  return (
    <>
      <aside className="newsletter-section-component">
        <div className="__newsletter-wrapper">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            repellat, fuga quos aperiam nisi laboriosam?
          </p>
          <span className="newsletter-response-message"></span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            aria-placeholder="email"
            required
            aria-required
            onChange={(event) => {
              setEmail((event.target as HTMLInputElement).value);
            }}
            value={email}
          />
          <button type="button" onClick={HandleButtonClick}>
            subscribe
          </button>
        </div>
      </aside>
    </>
  );
};

export default NewsletterComponent;
