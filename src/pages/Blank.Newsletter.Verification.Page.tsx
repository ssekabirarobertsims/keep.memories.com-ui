import React from "react";
import { Link } from "react-router-dom";

const NewsLetterSubscriptionBlankPage: React.FC = (): any => {
  return (
    <section className="newsletter-verification-status-blank-page">
      <h1>Newsletter Subscribed Successfully</h1>
      <p>
        You can now{" "}
        <Link
          to={{
            pathname: "/",
          }}
        >
          click here
        </Link>{" "}
        to head back to public page
      </p>
    </section>
  );
};

export default NewsLetterSubscriptionBlankPage;
