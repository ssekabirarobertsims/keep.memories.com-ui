import { IoMdClose, IoMdDownload } from "react-icons/io";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import LoggedInUserInformationObjectContent from "../context/UserContext";

interface Resource {
  id: string | number;
  resource_id: string;
  resource: string;
  category: string;
  resource_title: string;
}

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

const PhotoViewComponent: React.FunctionComponent = (): any => {
  const context: UserContextType = useContext(
    LoggedInUserInformationObjectContent
  ) as UserContextType;
  const LoggedInUserInformationObject: User = JSON.parse(context) as User;

  const [resources, setResources] = useState<Resource[]>([]);
  const [resource, setResource] = useState<Resource>();
  const [similarContent, setSimilarContent] = useState<Resource[]>([]);

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

    // set similar content
    setSimilarContent(
      resources.filter((arg: Resource) => {
        return arg.category === resource?.category;
      })
    );
  }, [resources]);

  function handleButtonClick(): void {
    const view: HTMLElement = window.document.querySelector(
      ".photo-view"
    ) as HTMLElement;
    view.style.display = "none";
  }

  return (
    <aside className={String("photo-view")}>
      <div className="photo-view-wrapper">
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
                <a href="" className="selected-photo-category-collection-link">
                  <BiCategory />
                </a>
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
        </aside>
        <div className="photo">
          <img
            src={"/uploads/old-black-african-smiling-womman-in-red.jpg"}
            alt="select photo placeholder"
            className="img-placeholder"
          />
        </div>
        <div className="more-selected-content">
          <div>
            <img
              src={
                similarContent[0 as number]
                  ? `/uploads/${similarContent[0 as number]?.resource}`
                  : "/uploads/old-black-african-smiling-womman-in-red.jpg"
              }
              alt={
                similarContent[0 as number]
                  ? `/uploads/${similarContent[0 as number]?.resource}`
                  : "/uploads/old-black-african-smiling-womman-in-red.jpg"
              }
            />
            <a
              href={
                similarContent[0 as number]
                  ? `/uploads/${similarContent[0 as number]?.resource}`
                  : "/uploads/old-black-african-smiling-womman-in-red.jpg"
              }
              download
            >
              <button type="button">
                <IoMdDownload />
              </button>
            </a>
          </div>
          <div>
            <img
              src={
                similarContent[1 as number]
                  ? `/uploads/${similarContent[1 as number]?.resource}`
                  : "/uploads/man.jpg"
              }
              alt={
                similarContent[1 as number]
                  ? `/uploads/${similarContent[1 as number]?.resource}`
                  : "/uploads/man.jpg"
              }
            />
            <a
              href={
                similarContent[1 as number]
                  ? `/uploads/${similarContent[1 as number]?.resource}`
                  : "/uploads/man.jpg"
              }
              download
            >
              <button type="button">
                <IoMdDownload />
              </button>
            </a>
          </div>
          <div>
            <img
              src={
                similarContent[2 as number]
                  ? `/uploads/${similarContent[2 as number]?.resource}`
                  : "/uploads/little-smiling-curly-hair-kid.jpg"
              }
              alt={
                similarContent[2 as number]
                  ? `/uploads/${similarContent[2 as number]?.resource}`
                  : "/uploads/little-smiling-curly-hair-kid.jpg"
              }
            />
            <a
              href={
                similarContent[2 as number]
                  ? `/uploads/${similarContent[2 as number]?.resource}`
                  : "/uploads/little-smiling-curly-hair-kid.jpg"
              }
              download
            >
              <button type="button">
                <IoMdDownload />
              </button>
            </a>
          </div>
          <div>
            <img
              src={
                similarContent[3 as number]
                  ? `/uploads/${similarContent[3 as number]?.resource}`
                  : "/uploads/curly-hair-black-woman-in-red.jpg"
              }
              alt={
                similarContent[3 as number]
                  ? `/uploads/${similarContent[3 as number]?.resource}`
                  : "/uploads/curly-hair-black-woman-in-red.jpg"
              }
            />
            <a
              href={
                similarContent[3 as number]
                  ? `/uploads/${similarContent[3 as number]?.resource}`
                  : "/uploads/curly-hair-black-woman-in-red.jpg"
              }
              download
            >
              <button type="button">
                <IoMdDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PhotoViewComponent;
