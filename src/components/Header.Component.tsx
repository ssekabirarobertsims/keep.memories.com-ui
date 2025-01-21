import { FaSearch } from "react-icons/fa";
import PhotoViewComponent from "./Photo.View.Component";

function HeaderComponent() {
  return (
    <>
      <header className="application-header">
        <article>
          <h1>Download and save your favorite photos.</h1>
          <p>
            Free and simple application that allows you to download and save
            photos from the internet. You can search for photos by category or
            by searching for a specific photo using the search bar to search and
            find your favorite photos.
          </p>
          <br />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              window.setTimeout(() => {
                window.location.href = "/filter/searches";
              }, 1000 as number);
            }}
          >
            <FaSearch /> Find in searches
          </button>
        </article>
        <PhotoViewComponent />
      </header>
    </>
  );
}

export default HeaderComponent;
