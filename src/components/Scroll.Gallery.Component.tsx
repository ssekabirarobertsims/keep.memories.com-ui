import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const ScrollGalleryComponent: React.FC = () => {
  return (
    <aside className="scroll-gallery-component">
      <h1>Popular Photo Collection Reviews</h1>
      <p>
        Explore and download the best beautiful and inspiring photo reviews of
        the month from our latest and updated gallery photos collection.
      </p>
      <br />
      <div className="_wrapper">
        <article className="photo-wrapper">
          <img src="/uploads/OIP.jpg" alt="" />
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
              href="/uploads/OIP.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
            <a href="/filter/searches" title="find in searches...">
              <button type="button">
                <FaSearch />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img src="/uploads/beautiful-zebra-wild_23-2151690291.jpg" alt="" />
          <div className="blur">
            <Link
              to={{
                pathname: "/photos/categories/nature",
              }}
            >
              <button type="button">
                <BiCategory />
              </button>
            </Link>
            <a
              href="/uploads/horses-field_1048944-10315598.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
            <a href="/filter/searches" title="find in searches...">
              <button type="button">
                <FaSearch />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img src="/uploads/illutrations-of-a-smoking-woman.webp" alt="" />
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
              href="/uploads/illutrations-of-a-smoking-woman.webp"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
            <a href="/filter/searches" title="find in searches...">
              <button type="button">
                <FaSearch />
              </button>
            </a>
          </div>
        </article>
        <article className="photo-wrapper">
          <img src="/uploads/curly-hair-black-woman-in-red.jpg" alt="" />
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
              href="/uploads/curly-hair-black-woman-in-red.jpg"
              download
              title="download best review of the month!"
            >
              <button type="button">
                <LuDownload />
              </button>
            </a>
            <a href="/filter/searches" title="find in searches...">
              <button type="button">
                <FaSearch />
              </button>
            </a>
          </div>
        </article>
      </div>
      <br />
      <div className="pagination-wrapper">
        <Link
          to={{
            pathname: "/photos/categories/dark-photos",
          }}
        >
          {" "}
        </Link>
        <Link
          to={{
            pathname: "/photos/categories/nature",
          }}
        >
          {" "}
        </Link>
        <Link
          to={{
            pathname: "/photos/categories/illustrations",
          }}
        >
          {" "}
        </Link>
        <Link
          to={{
            pathname: "/photos/categories/people",
          }}
        >
          {" "}
        </Link>
      </div>
      <Link
        to={{
          pathname: "/photos/categories/collection",
        }}
      >
        View Collection
      </Link>
      <br />
    </aside>
  );
};

export default ScrollGalleryComponent;
