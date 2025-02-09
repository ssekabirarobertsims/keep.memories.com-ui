import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PhotoViewComponent from "../../components/Photo.View.Component";
import LoaderComponent from "../../components/Loader.Component";
import FooterComponent from "../../components/Footer.Component";
import ScrollGalleryComponent from "../../components/Scroll.Gallery.Component";
import adminContext from "../../context/adminContext";
import AdvertComponent from "../../components/Advert.Component";
import WelcomeCookieAlertMessage from "../../components/Welcome.Cookie.Alert.Message.Component";

interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

interface AdminObject {
  login_id: string;
  username: string;
  email: string;
  token: string;
  message: string;
  status: string;
  signedUp: boolean | string;
  date: string;
}

type Admin = string;

function All() {
  const context: Admin = useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);

  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-com-api.onrender.com/resources",
        // "https://api-jsonresources-restapi.onrender.com/resources/users",
        {
          headers: {
            Authorization: `Bearer ${adminObject?.token}`,
          },
        }
      );

      const response = await request.data;

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component") as HTMLElement
        ).style.display = "none";
        await setResources(response);
      }, 6000 as number);
    } catch (error) {
      console.log(error);
      console.warn("Connection to server was lost...");
      console.warn("Reconnecting to server...");
      console.warn("Connecting...");

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component") as HTMLElement
        ).style.display = "none";
      }, 6000 as number);
    }
  }

  useEffect(() => {
    FetchResources();
  });

  try {
    return resources.length > 0 ? (
      <>
        <NavigationBarComponent />
        <br />
        <section className="all">
          <h1>Photos in our gallery to get you inspired</h1>
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
                key={resource.id}
                title={`photo uploaded by ${resource.resource_admin} on ${resource.upload_date}`}
              >
                <img
                  src={`/uploads/${resource.resource}`}
                  alt={`photo from ${resource.category}`}
                  onClick={(event) => {
                    const photoView = document.querySelector(
                      ".photo-view"
                    ) as HTMLElement;
                    const imgPlaceholder = document.querySelector(
                      ".img-placeholder"
                    ) as HTMLImageElement;
                    const resourceAdmin = document.querySelector(
                      ".resource_admin"
                    ) as HTMLElement;
                    const uploadDate = document.querySelector(
                      ".upload_date"
                    ) as HTMLElement;
                    const resourceCollectionUl = document.querySelector(
                      ".resource_collection_ul"
                    ) as HTMLAnchorElement;

                    photoView.style.display = "flex";
                    imgPlaceholder.src = (event.target as HTMLImageElement).src;

                    const foundResource = resources.find(
                      (res: Resource) =>
                        res.resource === (event.target as HTMLImageElement).src
                    );

                    if (foundResource) {
                      resourceAdmin.textContent = foundResource.resource_admin;
                      uploadDate.textContent =
                        foundResource.upload_date.toString();
                      resourceCollectionUl.href = `/photos/categories/${foundResource.category}`;
                    }
                  }}
                />
              </article>
            ))}
          </div>
          <PhotoViewComponent />
          <br />
          <span>
            Found {(resources as Resource[])?.length} photos from this category.
          </span>
          <br />
          <br />
        </section>
        <ScrollGalleryComponent />
        <WelcomeCookieAlertMessage />
        <LoaderComponent />
        <FooterComponent />
      </>
    ) : (
      <>
        <NavigationBarComponent />
        <div className="not-results-wrapper">
          <strong>Sorry, no results found!</strong>
          <p>
            Please check your searches wether they match correctly or try
            reloading the page again to try to find your results again.
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
        </div>
        <ScrollGalleryComponent />
        <LoaderComponent />
        <WelcomeCookieAlertMessage />
        <AdvertComponent />
        <FooterComponent />
      </>
    );
  } catch (error) {
    console.error(error);
  }
}

export default All;
