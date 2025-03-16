import { Link } from "react-router-dom";
import PublicPagePhotoCollection from "./Public.Photo.Collection.Component";
import WelcomeCookieAlertMessage from "./Welcome.Cookie.Alert.Message.Component";
import PhotosCategoriesComponent from "./Photos.Categories.Component";

const MainPageComponent: React.FC = (): any => {
  return (
    <>
      <main className={String("public-page")}>
        <WelcomeCookieAlertMessage />
        <br />
        <br />
        <br />
        <h1 id="main-page-heading-one">Get inspired</h1>
        <br />
        <p>
          Get inspired by our selected content from our different photo gallery
          collections of beautiful, inspiring and astonishing photos for your
          interests and desires from different choices by us.
        </p>
        <br />
        <br />
        <PublicPagePhotoCollection />
        <br />
        <br />
        <br />
        <Link
          to={{
            pathname: "/photos/categories/collection",
          }}
          className="explore-collections-button-anchor-wrapper"
        >
          <button type="button">Explore Collection</button>
        </Link>
        <br />
        <br />
        <br />
        <PhotosCategoriesComponent />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default MainPageComponent;
