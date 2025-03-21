import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PhotoViewComponent from "../../components/Photo.View.Component";
import FooterComponent from "../../components/Footer.Component";
import ScrollGalleryComponent from "../../components/Scroll.Gallery.Component";
import WelcomeCookieAlertMessage from "../../components/Welcome.Cookie.Alert.Message.Component";
import { LuDownload } from "react-icons/lu";

interface Resource {
  id: string | number;
  resource_id: string;
  resource: string;
  category: string;
  resource_title: string;
}

import LoggedInUserInformationObjectContent from "../../context/UserContext";
import AdvertComponent from "../../components/Subscription.Advert.Component";

interface User {
  login_id: string;
  date: string;
  request_id: string;
  error: any;
  request_status: number;
  data: {
    username: string;
    email: string;
    token: string;
    message: string;
    status: string;
    signedUp: boolean;
  };
}

type UserContextType = string;
import OfflineMessageComponent from "../../components/Offline.Message.Component";
import AccountAuthenticationAlertComponent from "../../components/Account.Authentication.Alert.Component";

function Animals() {
  const context: UserContextType = useContext(
    LoggedInUserInformationObjectContent
  ) as UserContextType;
  const LoggedInUserInformationObject: User = JSON.parse(context);

  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-photo-gallery-api-service.onrender.com/api/photo/resources",
        {
          headers: {
            Authorization: `Bearer ${LoggedInUserInformationObject.data?.token}`,
          },
        }
      );

      const response = await request.data?.resources;

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component-2") as HTMLElement
        ).style.display = "none";
        await setResources(
          response.filter((index: Resource) => {
            return index.category === "animals";
          })
        );
      }, 6000 as number);
    } catch (error) {
      console.log(error);
      console.warn("Connection to server was lost...");
      console.warn("Reconnecting to server...");
      console.warn("Connecting...");

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component-2") as HTMLElement
        ).style.display = "none";
      }, 6000 as number);
    }
  }

  useEffect(() => {
    FetchResources();
  }, []);

  try {
    return resources.length > 0 ? (
      <>
        <NavigationBarComponent />
        <br />
        <section className="animals">
          <h1>Beautiful photos from animals</h1>
          <p>
            Get all your favorite photos and downloads from one place to your
            local machine. Fugiat voluptatum facere deleniti commodi! Debitis
            nesciunt eveniet eius voluptatem illo illum quam.
          </p>
          <br />
          <div className="photos">
            {resources.map((resource: Resource) => (
              <article
                className="photo_resource"
                key={resource.resource_id}
                title={`${resource.resource_id}`}
              >
                <div className="before_wrapper">
                  <a href={`/uploads/${resource.resource}`} download>
                    <button type="button">
                      <LuDownload />
                    </button>
                  </a>
                </div>
                <img
                  src={`/uploads/${resource.resource}`}
                  alt={`photo from ${resource.category}`}
                  onClick={(event) => {
                    event.stopPropagation();

                    const photoViewComponent = document.querySelector(
                      ".photo-view"
                    ) as HTMLElement;
                    const photoPlaceholder = document.querySelector(
                      ".img-placeholder"
                    ) as HTMLImageElement;
                    const selectedPhotoCollectionURL = document.querySelector(
                      ".selected-photo-category-collection-link"
                    ) as HTMLAnchorElement;

                    photoViewComponent.style.display = "flex";
                    photoPlaceholder.src = (
                      event.target as HTMLImageElement
                    ).src;
                    selectedPhotoCollectionURL.href = `/photos/categories/${resource.category}`;
                  }}
                />
              </article>
            ))}
          </div>
          <br />
          <span>
            Found {(resources as Resource[])?.length} photos from this category.
          </span>
          <br />
          <br />
          <aside className="loader-component-2">
            <div className="spinner"></div>
          </aside>
        </section>
        <ScrollGalleryComponent />
        <WelcomeCookieAlertMessage />
        <AccountAuthenticationAlertComponent />
        <OfflineMessageComponent />
        <PhotoViewComponent />
        <FooterComponent />
      </>
    ) : (
      <>
        <NavigationBarComponent />
        <div className="no-results-found">
          <strong>Opps, no photos found!</strong>
          <p>
            Looks like no photos were found or reloaded from the database, try
            reloading the page to refetch the photos from our databases.
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              window.location.reload();
            }}
          >
            Try Again
          </button>
          <aside className="loader-component-2">
            <div className="spinner"></div>
          </aside>
        </div>
        <ScrollGalleryComponent />
        <OfflineMessageComponent />
        <AccountAuthenticationAlertComponent />
        <WelcomeCookieAlertMessage />
        <AdvertComponent />
        <FooterComponent />
      </>
    );
  } catch (error) {
    console.error(error);
  }
}

export default Animals;
