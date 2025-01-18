import React from "react";
import { Link } from "react-router-dom";

const BlankAuthStatusPage: React.FC = () => {
  return (
    <section className="email-verification-status-blank-page">
      <h1>You are already signed in</h1>
      <p>
        You can now{" "}
        <Link
          to={{
            pathname: "/",
          }}
        >
          click here
        </Link>{" "}
        continue!
      </p>
    </section>
  );
};

export default BlankAuthStatusPage;
