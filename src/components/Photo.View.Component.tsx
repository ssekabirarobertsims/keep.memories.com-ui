import { IoMdClose, IoMdDownload } from "react-icons/io";
// import { FaCameraRetro } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
// import { MdOutlineContentCopy } from "react-icons/md";

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

  console.log(resource ? resource : "");

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

  return (
    <aside className={String("photo-view")}>
      <div className="photo-view-wrapper">
        <div className="photo">
          <img
            src={"/uploads/old-black-african-smiling-womman-in-red.jpg"}
            alt=""
            className="img-placeholder"
          />
        </div>
        <br />
        <aside>
          <div className="_wrapper">
            <ul>
              <li onClick={handleButtonClick}>
                <IoMdClose />
              </li>
              <li>
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
                  <IoMdDownload />
                </a>
              </li>
              <li>
                <BiHeart />
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/filter/searches",
                  }}
                >
                  <AiOutlineSearch />
                </Link>
              </li>
              <li>
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
                    <LuDownload /> Download
                  </button>
                </a>
              </li>
            </ul>
          </div>
          {/* <button type="button" className="close" onClick={handleButtonClick}>
            <IoMdClose />
          </button> */}
        </aside>
      </div>
    </aside>
  );
}

export default PhotoViewComponent;
