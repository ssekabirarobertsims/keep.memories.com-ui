import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect } from "react";
import axios from "axios";
import PhotoViewComponent from "../../components/Photo.View.Component";

interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

function All() {
  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get(
        // "https://keep-memories-com-api.onrender.com/resources",
        "http://localhost:3500/resources",
        {
          headers: {
            Authorization: "",
          },
        }
      );

      const response = await request.data;
      setResources(response);
    } catch (error) {
      console.log(error);
      console.warn("Connection to server was lost...");
      console.warn("Reconnecting to server...");
      console.warn("Connecting...");
    }
  }

  useEffect(() => {
    FetchResources();
  }, [resources]);

  try {
    return resources.length > 0 ? (
      <>
        <NavigationBarComponent />
        <br />
        <section className="all">
          <h1>Photos in our gallery to get you inspired</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            optio rem quidem fugiat voluptatum facere deleniti commodi! Debitis
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
            Get Inspired By Our Collection Of{" "}
            {(resources as Resource[])?.length + 1} photos
          </span>
          <br />
          <br />
        </section>
      </>
    ) : (
      <>
        <NavigationBarComponent />
        <div className="img-wrapper">
          <img src="/photos/3363936.webp" alt="" />
          <p>No photos were found, try reloading the page!</p>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
  }
}

export default All;
