import React from "react";
import { Link } from "react-router-dom";

const AdvertComponent: React.FC = () => {
  return (
    <aside className="advert-component">
      <div className="wrapper">
        <h1>Do not miss out updates and new uploads</h1>
        <p>
          Always stay updated with our latest uploads and updates by subscribing
          to our newsletter to get the latest news and updates on our latest
          uploads and updates.
        </p>
        <br />
        <Link
          to={{
            pathname: "/newsletter/subscriptions",
          }}
        >
          <button type="button">subscribe</button>
        </Link>
      </div>
    </aside>
  );
};

export default AdvertComponent;
