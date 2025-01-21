import { IoMdClose, IoMdDownload } from "react-icons/io";
// import { FaCameraRetro } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}
function PhotoViewComponent() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [resource, setResource] = useState<Resource>();

  async function FetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-com-api.onrender.com/resources",
        {
          headers: {
            Authorization: "",
          },
        }
      );

      const response = await request.data;
      setResources(response);
      setResource(
        (response as Resource[]).find((index: Resource) => {
          return (
            index.resource ===
            (
              window.document.querySelector(
                ".img-placeholder"
              ) as HTMLImageElement
            ).src.slice(30)
          );
        })
      );
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
  // console.log(resources);

  function handleButtonClick(): void {
    const view: HTMLElement = window.document.querySelector(
      ".photo-view"
    ) as HTMLElement;
    view.style.display = "none";
  }

  // console.log(
  //   (
  //     window.document.querySelector(".img-placeholder") as HTMLImageElement
  //   ).src.slice(30)
  // );

  return (
    <aside className={String("photo-view")}>
      <div className="photo-view-wrapper">
        <div className="photo">
          <img src={"/uploads/ill-4.webp"} alt="" className="img-placeholder" />
        </div>
        <aside>
          <div className="wrapper">
            <span onClick={handleButtonClick}>
              <IoMdClose />
            </span>
            <h1>
              Download & Save Photos From{" "}
              {(resource?.category as string)?.toLocaleUpperCase()}
            </h1>

            <ul>
              <li>
                File:{" "}
                {(resource?.resource as string)
                  ? (resource?.resource as string)
                  : "unknown"}
              </li>
              <li>
                Filename:{" "}
                {(resource?.resource as string)
                  ? (resource?.resource as string)
                  : ("unknown" as unknown as string)}
              </li>
              <li>Size: 29304</li>
              <li>
                Upload Date:{" "}
                {resource?.upload_date
                  ? resource?.upload_date
                  : ("unknown" as unknown as string)}
              </li>
              <li>
                Uploaded By:{" "}
                {resource?.resource_admin
                  ? resource?.resource_admin
                  : ("unknown" as unknown as string)}
              </li>
              <li>
                Category:{" "}
                {resource?.category
                  ? resource?.category
                  : ("unknown" as unknown as string)}
              </li>
              <li>Dimensions: 12033 * 1022</li>
              <li>Source: Keep Memories Photo Gallery</li>
            </ul>
            <a
              href={
                (
                  window.document.querySelector(
                    ".img-placeholder"
                  ) as unknown as HTMLImageElement
                )?.src
              }
              download
            >
              <button type="button">
                <IoMdDownload /> Download
              </button>
            </a>
          </div>
        </aside>
      </div>
    </aside>
  );
}

export default PhotoViewComponent;
