import { useRef } from "react";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import { BsArrowUp } from "react-icons/bs";
import MainPageComponent from "../components/Main.Component";

function PublicPage() {
  const buttonRef = useRef(null);

  return (
    <>
      <HeaderComponent />
      <a href="/#">
        <button
          type="button"
          className="navigation-upper-scroll-button"
          ref={buttonRef}
        >
          <BsArrowUp />
        </button>
      </a>
      <MainPageComponent />
      <FooterComponent />
    </>
  );
}

export default PublicPage;
