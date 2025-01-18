import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
// import { FaTrash } from "react-icons/fa";
import PhotoViewComponent from "../components/Photo.View.Component";
import LogoutAlertBox from "../components/Logout.Alert.Box.Component";
import UploadPhotoForm from "../components/Upload.Photo.Form.Component";
import { useEffect, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
// import Delete from "../functions/Delete";

interface Resource {
  id: number;
  resource_url: string;
  category: string;
  resource_admin: string;
  title: string;
  resource_id: string;
}

import { FaDownload } from "react-icons/fa";
import axios from "axios";
import adminContext from "../context/adminContext";
import React from "react";

interface Admin {
  email: string;
  message: string;
  token: string;
  username: string;
}

type Photo = {
  id: string;
  resource_url: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
};

function AdminDashboardPage() {
  const [adminCollection, setAdminCollection] = useState([] as Photo[]);
  const context: string = React.useContext(adminContext) as string;
  const admin: Admin = JSON.parse(context) as Admin;
  const [resources, setResources] = useState([] as Resource[]);
  const connectionWarningMessage: string =
    "Lost connection to the server, please reconnect to the internet!" as string;

  async function fetchResources(): Promise<void> {
    const request = await axios.get(
      "https://keep-memories-rest-api.onrender.com/resources",
      {
        headers: {
          Authorization: admin.token,
        },
      }
    );

    const response: Resource[] = await request.data;

    try {
      setResources(
        response.filter((photo: Resource) => {
          return photo.resource_admin === admin.username;
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResources([]);
      console.warn(connectionWarningMessage);
    }
  }

  useEffect(() => {
    fetchResources();
  });

  async function fetchAdminPostedResources(): Promise<void> {
    const request = await axios.get(
      "https://keep-memories-rest-api.onrender.com/admin/uploaded/resources",
      {
        headers: {
          Authorization: admin.token,
        },
      }
    );

    const response: Photo[] = await request.data;

    try {
      setAdminCollection(
        response.filter((photo: Photo) => {
          return photo.resource_admin === admin.username;
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setAdminCollection([]);
      console.warn(connectionWarningMessage);
    }
  }

  useEffect(() => {
    fetchAdminPostedResources();
  });

  try {
    return (
      <>
        <NavigationBarComponent />
        <br />
        <section className={String("admin-dashboard-section-page")}>
          <h1>All Photos In Your Collection</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            optio rem quidem fugiat voluptatum facere deleniti commodi! Debitis
            nesciunt eveniet eius voluptatem illo illum quam.
          </p>
          {resources.length > 0 ? (
            <p>{`Found ${resources.length + 1} photos in your collection`}</p>
          ) : (
            ("" as string)
          )}
          <br />
          <div className={String("collection")}>
            {adminCollection.length > 0 ? (
              adminCollection.map((photo: Photo) => (
                <article
                  className={String("photo_resource")}
                  key={photo.id}
                  title={`${photo.resource_title} uploaded by ${photo.resource_admin}`}
                >
                  <img
                    src={photo.resource_url}
                    alt={`photo from ${photo.category}`}
                    onClick={(event) => {
                      const photView: HTMLElement =
                        window.document.querySelector(
                          ".photo-view"
                        ) as HTMLElement;
                      photView.style.display = "flex";

                      const imgPlaceholder: HTMLImageElement =
                        window.document.querySelector(
                          ".img-placeholder"
                        ) as HTMLImageElement;
                      imgPlaceholder.src = (
                        event.target as HTMLImageElement
                      ).src;
                      const resource: Resource | undefined = resources.find(
                        (index: Resource) => {
                          return (
                            index.resource_url ===
                            (event.target as HTMLImageElement).src
                          );
                        }
                      );
                      const resourceAdminPlaceholder: HTMLElement =
                        window.document.querySelector(
                          ".resource_admin"
                        ) as HTMLElement;
                      if (resource) {
                        resourceAdminPlaceholder.textContent = (
                          resource as Resource
                        ).resource_admin;
                      }
                      (
                        window.document.querySelector(
                          ".upload_date"
                        ) as HTMLElement
                      ).textContent = photo.upload_date as string;
                    }}
                  />
                  <div className={String("photo-details")}>
                    <section>
                      <aside>
                        <a href="" download={String(photo.resource_url)}>
                          <button type="button" className={String("")}>
                            <FaDownload />
                          </button>
                        </a>
                        {/* <button
                          type="button"
                          className={String("")}
                          onClick={(event) => {
                            event.stopPropagation();
                            Delete("id");
                          }}
                        >
                          <FaTrash />
                        </button> */}
                      </aside>
                    </section>
                  </div>
                </article>
              ))
            ) : (
              <div className="img-wrapper">
                <img src="/3363936.webp" alt="" />
                <p>No photos were found, try reloading the page!</p>
              </div>
            )}
            <PhotoViewComponent />
            <LogoutAlertBox />
          </div>
          <UploadPhotoForm />
          <br />
          <button
            type="button"
            className="upload"
            onClick={(event) => {
              event.stopPropagation();
              (
                window.document.querySelector(".upload-form") as HTMLElement
              ).style.display = "flex";
            }}
            title="click to upload photo"
          >
            {<MdOutlineAddPhotoAlternate />}
          </button>
        </section>
        <br />
        <FooterComponent />
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

export default AdminDashboardPage;
