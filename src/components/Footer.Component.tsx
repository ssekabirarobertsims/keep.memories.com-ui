// import { Link } from "react-router-dom";
// import { FaCameraRetro } from "react-icons/fa";
import { dateContext } from "../main";
import React from "react";
// import { FaHeart } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaGooglePlus,
} from "react-icons/fa";
type Date = string;

const FooterComponent: React.FC = () => {
  const date: Partial<Readonly<Date>> = React.useContext(
    dateContext
  ) as Partial<Readonly<Date>>;

  return (
    <>
      <footer className="footer">
        <div className="__footer-information-wrapper">
          <h1>Free Photos Gallery</h1>
          <p>
            A free photo gallery for all your needs. Download and save photos
            for free and use them for anything you like without any
            restrictions, conditions or limitations.
          </p>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGooglePlus />
            </li>
          </ul>
          <ul className="outer-links">
            <a href="" target="_blank">
              <li>sponsor</li>
            </a>
            <a href="https://robertsims.netlify.app/" target="_blank">
              <li>developer</li>
            </a>
            <a href="" target="_blank">
              <li>terms</li>
            </a>
            <a href="" target="_blank">
              <li>services</li>
            </a>
            <a
              href="https://keep-memories-com-api.onrender.com/"
              target="_blank"
            >
              <li>api</li>
            </a>
          </ul>
        </div>
        <div className="copyright-wrapper">
          <span>
            keep memories photo gallery &copy;right {date as string}{" "}
            <a href="https://robertsims.netlify.app/" target="_blank">
              developer
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
