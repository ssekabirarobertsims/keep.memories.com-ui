import React from "react";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import MainPageComponent from "../components/Main.Component";
import OfflineMessageComponent from "../components/Offline.Message.Component";

const PublicPage: React.FunctionComponent = (): any => {
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
