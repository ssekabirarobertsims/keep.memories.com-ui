// import { Link } from "react-router-dom";
// import { FaCameraRetro } from "react-icons/fa";
import { dateContext } from "../main";
import React from "react";
// import { FaHeart } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
type Date = string;
import { BiHeart } from "react-icons/bi";

const FooterComponent: React.FC = () => {
  const date: Partial<Readonly<Date>> = React.useContext(
    dateContext
  ) as Partial<Readonly<Date>>;

  return (
    <>
      <br />
      <br />
      <footer className="footer">
        <aside className="__footer-wrapper">
          <div className="section">
            <h1>Free Photos Gallery</h1>
            <p>
              A free photo gallery for all your needs. Download and save photos
              for free and use them for anything you like without any
              restrictions, conditions or limitations. Site developed with{" "}
              <BiHeart /> by{" "}
              <a href="https://robertsims.netlify.app/" target="_blank">
                ssekabira robert sims
              </a>{" "}
              and the team at stack technologies organization.
            </p>
            <ul className="socials">
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div className="section">
            <h1>Links</h1>
            <ul className="outer-links">
              <a href="" target="_blank">
                <li>sponsor</li>
              </a>
              <a href="https://robertsims.netlify.app/" target="_blank">
                <li>developer</li>
              </a>
              <a href="" target="_blank">
                <li>terms & privacy</li>
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
              <a
                href="https://keep-memories-com-api.onrender.com/"
                target="_blank"
              >
                <li>Policies</li>
              </a>
            </ul>
          </div>
          <div className="section">
            <h1>Contact</h1>
            <ul className="contacts">
              <li>
                <IoLocation /> Kampala, Uganda
              </li>
              <li>
                <MdAddCall /> +256 726 930 366
              </li>
              <li>
                <MdOutlineEmail /> support@gmail.com
              </li>
              <li>
                <MdOutlineEmail /> robertsims7076@gmail.com
              </li>
            </ul>
          </div>
        </aside>
        <div className="copyright-wrapper">
          <span>
            <strong>keep memories</strong> photo gallery &copy;right 2024-
            {date as string} rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
