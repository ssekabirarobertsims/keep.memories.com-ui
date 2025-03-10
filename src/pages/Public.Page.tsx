import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import MainPageComponent from "../components/Main.Component";
import OfflineMessageComponent from "../components/Offline.Message.Component";

function PublicPage() {
  return (
    <>
      <HeaderComponent />
      <MainPageComponent />
      <OfflineMessageComponent />
      <FooterComponent />
    </>
  );
}

export default PublicPage;
