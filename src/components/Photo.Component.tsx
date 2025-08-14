import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Photo: React.FunctionComponent = () => {
  return (
    <article className={String("photo")}>
      <img
        src="/photos/dark-skies-2023.jpg"
        alt=""
        onClick={() => {
          (
            window.document.querySelector(".photo-view") as HTMLElement
          ).style.display = "flex";
        }}
      />
      <div className={String("photo-details")}>
        <section>
          <aside>
            <a href="" download={String("")}>
              <button type="button" className={String("")}>
                <FaDownload />
              </button>
            </a>
            <button type="button" className={String("")}>
              <FaHeart />
            </button>
          </aside>
        </section>
      </div>
    </article>
  );
};

export default Photo;
