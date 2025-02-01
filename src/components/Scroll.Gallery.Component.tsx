import React from "react";
import { LuDownload } from "react-icons/lu";
// import { FaSearch } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const ScrollGalleryComponent: React.FC = () => {
  return (
    <aside className="scroll-gallery-component">
      <h1>Best Reviews Of The Month!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        totam. Libero reiciendis itaque veniam quasi laboriosam id molestias ut
        eveniet.
      </p>
      <br />
      <div className="_wrapper">
        <article className="photo-wrapper">
          <img src="/uploads/tech-gadgets-with-white-background.jpg" alt="" />
          <div className="blur">
            <Link
              to={{
                pathname: "/photos/categories/technology",
              }}
            >
              <button type="button">
                <BiCategory />
              </button>
            </Link>
            <a
              href="/uploads/tech-gadgets-with-white-background.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img src="/uploads/66d72ede8ff1d34e34d7943c_withmeta.jpg" alt="" />
          <div className="blur">
            <Link
              to={{
                pathname: "/photos/categories/people",
              }}
            >
              <button type="button">
                <BiCategory />
              </button>
            </Link>
            <a
              href="/uploads/66d72ede8ff1d34e34d7943c_withmeta.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img src="/uploads/misty-forest_1048944-26769805.jpg" alt="" />
          <div className="blur">
            <Link
              to={{
                pathname: "/photos/categories/dark-photos",
              }}
            >
              <button type="button">
                <BiCategory />
              </button>
            </Link>
            <a
              href="/uploads/misty-forest_1048944-26769805.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img
            src="/uploads/flat-africa-day-illustration_23-2149361411.jpg"
            alt=""
          />
          <div className="blur">
            <Link
              to={{
                pathname: "/photos/categories/illustrations",
              }}
            >
              <button type="button">
                <BiCategory />
              </button>
            </Link>
            <a
              href="/uploads/flat-africa-day-illustration_23-2149361411.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
          </div>
        </article>
      </div>
      <br />
      <Link
        to={{
          pathname: "/photos/categories/all",
        }}
      >
        View Collection
      </Link>
      <br />
    </aside>
  );
};

export default ScrollGalleryComponent;
