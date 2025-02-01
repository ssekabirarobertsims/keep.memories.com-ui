import React from "react";
// import { Link } from "react-router-dom";

const LoaderComponent: React.FC = () => {
  return (
    <aside className="loader-component">
      <div className="spinner"></div>
      <p>{/* <strong>LOADING...</strong> */}</p>
      {/* <Link
        to={{
          pathname: "/",
        }}
      >
        Cancel Fetch
      </Link> */}
    </aside>
  );
};

export default LoaderComponent;
