import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoaderComponent from "../../components/Loader.Component";
import PhotoViewComponent from "../../components/Photo.View.Component";
import FooterComponent from "../../components/Footer.Component";
import ScrollGalleryComponent from "../../components/Scroll.Gallery.Component";
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

import adminContext from "../../context/adminContext";

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

function Technology() {
  const context: Admin = useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);
  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-com-api.onrender.com/resources",
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
        await setResources(
          response.filter((index: Resource) => {
            return index.category === "technology";
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
          window.document.querySelector(".loader-component") as HTMLElement
        ).style.display = "none";
      }, 6000 as number);
    }
  }

  useEffect(() => {
    FetchResources();
  }, [resources]);

  return resources.length > 0 ? ( // This is the conditional rendering
    <>
      <NavigationBarComponent />
      <br />
      <section className="technology">
        <h1>Beautiful photos from technology</h1>
        <p>
          Get all your favorite photos and downloads from one place to your
          local machine. Fugiat voluptatum facere deleniti commodi! Debitis
          nesciunt eveniet eius voluptatem illo illum quam.
        </p>
        <br />
        <div className="photos">
          {resources.map((index: Resource) => (
            <article
              className="photo_resource"
              key={index.id}
              title={`photo uploaded by ${index.resource_admin}`}
            >
              <img
                src={`/uploads/${index.resource}`}
                alt={`photo from ${index.category}`}
                onClick={(event) => {
                  (
                    window.document.querySelector(".photo-view") as HTMLElement
                  ).style.display = "flex";
                  (
                    window.document.querySelector(
                      ".img-placeholder"
                    ) as HTMLImageElement
                  ).src = (event.target as HTMLImageElement).src;
                }}
              />
              <div className="photo-details">
                <section></section>
              </div>
            </article>
          ))}
        </div>
        <PhotoViewComponent />
        <br />
        <span>
          Found {(resources as Resource[])?.length} photos from this category.
          photos
        </span>
        <br />
        <br />
      </section>
      <ScrollGalleryComponent />
      <LoaderComponent />
      <WelcomeCookieAlertMessage />
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
}

export default Technology;
