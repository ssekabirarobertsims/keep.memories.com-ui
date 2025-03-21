import React from "react";
import { Link } from "react-router-dom";

const PhotosCategoriesComponent: React.FunctionComponent = (): any => {
  return (
    <>
      <aside className="photos-categories-component">
        <div className="photos-categories-component-content-wrapper">
          <article>
            <h3>Explore Photo Collections</h3>
            <Link
              to={{
                pathname: "/photos/categories/collection",
              }}
            >
              Collection
            </Link>
            <Link
              to={{
                pathname: "/photos/categories/illustrations",
              }}
            >
              Creative
            </Link>
            <Link
              to={{
                pathname: "/photos/categories/collection",
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
                  }}
                >
                  Illustrations
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/dark-photos",
                  }}
                >
                  Dark Photos
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/nature",
                  }}
                >
                  Nature
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "photos/categories/people",
                  }}
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/photos/categories/technology",
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
