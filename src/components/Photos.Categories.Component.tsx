import React from "react";
import { Link } from "react-router-dom";

const PhotosCategoriesComponent: React.FunctionComponent = () => {
  return (
    <>
      <aside className="photos-categories-component">
        <div className="photos-categories-component-content-wrapper">
          <article>
            <h3>Explore Photo Collections</h3>
            <Link
              to={{
                pathname: "/photos/categories/collection",
                search: "page=collection&query=collection"
              }}
            >
              Collection
            </Link>
            <Link
              to={{
                pathname: "/photos/categories/illustrations",
                search: "page=collection&query=illustrations"
              }}
              >
              Creative
            </Link>
            <Link
              to={{
                pathname: "/photos/categories/collection",
                search: "page=collection&query=collection"
              }}
            >
              Beautiful Events
            </Link>
          </article>
          <article>
            <br />
            <ul>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/illustrations",
                    search: "page=collection&query=illustrations"
                  }}
                  >
                  Illustrations
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/dark-photos",
                    search: "page=collection&query=dark-photos"
                  }}
                  >
                  Dark Photos
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/nature",
                    search: "page=collection&query=nature"
                  }}
                  >
                  Nature
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "photos/categories/people",
                    search: "page=collection&query=people"
                  }}
                  >
                  People
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/technology",
                    search: "page=collection&query=technology"
                  }}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </article>
          <article id="photo-categories-photo-wrapper">
            <img
              src="/photos/blue-light-background-portrait_52683-91429.jpg"
              alt=""
            />
          </article>
        </div>
      </aside>
    </>
  );
};

export default PhotosCategoriesComponent;
