import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { dateContext } from "../main";
type Date = string;

const NotFoundPage: React.FunctionComponent = () => {
   const date: Partial<Readonly<Date>> = React.useContext(
    dateContext
  ) as Partial<Readonly<Date>>;

   // cookies status
  const CookiesStatus: boolean = window.document.cookie.includes(
    "cookies-accepted"
  ) as boolean;

  // Set the document title for the Not Found page
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  // This component renders a 404 Not Found page with a sad icon, title, message, and a link to go back to the home page
  // This component renders a 404 Not Found page with a sad icon, title, message, and a link to go back to the home page
  // It uses the useEffect hook to set the document title when the component mounts
  return (
    <>
      <section
        className="not-found-page-container"
        style={{
          minHeight: "100vh",
          width: " min(100%, 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage: "url(public/photos/man-portrait-with-blue-lights-visual-effects_23-2149419466.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%"
        }}
      >
        <div
          className="not-found-page-content"
          style={{
            minHeight: "100vh",
            width: " min(90%, 90%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1em",
            backgroundColor: "rgba(0, 0, 0, .5)",
          }}
        >
          <h1
            className="not-found-page-title"
            style={{
              fontSize: "6rem",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            404
          </h1>
          <span
            className="not-found-page-prime-message"
            style={{
              color: "hsl(0, 0%, 90%)",
              fontSize: "1.5rem",
              fontWeight: "normal",
            }}
          >
            OPPS! NOTHING WAS FOUND
          </span>
          <p
            className="not-found-page-message"
            style={{
              color: "#e6e6e6ff",
              fontSize: "0.9em",
              maxWidth: "30em",
            }}
            >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to={{
              pathname: "/",
               search: `page=home&cookies=${CookiesStatus}`,
            }}
            className="not-found-page-link"
            style={{
              fontSize: "0.9em",
              textDecoration: "none",
              color: "#e6e6e6ff",
              fontWeight: "500",
              transition: "text-decoration 0.2s",
            }}
          >
            Go back to Home
          </Link>
          <span
            style={{
              color: "hsl(0, 0%, 95%)",
              fontSize: "0.9em",
            }}
          >
            <strong>keep memories</strong> photo gallery &copy;right 2024-
            {date as string} rights reserved
          </span>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
