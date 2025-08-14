import React, { useEffect } from "react";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import MainPageComponent from "../components/Main.Component";
import OfflineMessageComponent from "../components/Offline.Message.Component";

const PublicPage: React.FunctionComponent = () => {
   // set page title for current page
      useEffect(() => {
        window.document.title = "Page - Public | Home"
      });

  return (
    <>
      <HeaderComponent />
      <MainPageComponent />
      <OfflineMessageComponent />
      <FooterComponent />
    </>
  );
};

export default PublicPage;
