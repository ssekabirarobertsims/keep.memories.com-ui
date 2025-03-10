import React from "react";
import { Link } from "react-router-dom";

const BlankVerificationPage: React.FC = () => {
  return (
    <section className="email-verification-status-blank-page">
      <h1>Account Verified</h1>
      <p>
        You can now{" "}
        <Link
          to={{
            pathname: "/account/login",
          }}
        >
          click here
        </Link>{" "}
        log into your account to continue!
      </p>
    </section>
  );
};

export default BlankVerificationPage;
