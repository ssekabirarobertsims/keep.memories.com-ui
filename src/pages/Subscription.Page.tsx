import React, { useContext, useEffect } from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { MdOutlineUnsubscribe } from "react-icons/md";
import WelcomeCookieAlertMessage from "../components/Welcome.Cookie.Alert.Message.Component";
import OfflineMessageComponent from "../components/Offline.Message.Component";

interface User {
  login_id: string;
  date: string;
  request_id: string;
  error: unknown;
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
import LoggedInUserInformationObjectContent from "../context/UserContext";

const SubscribingPage: React.FC = () => { 
  const [email, setEmail] = React.useState<string>("");

   const context: UserContextType = useContext(
      LoggedInUserInformationObjectContent
    ) as UserContextType;
    const LoggedInUserInformationObject: User = JSON.parse(context);

    useEffect(() => {
      if (LoggedInUserInformationObject) {
        setEmail(LoggedInUserInformationObject.data.email);
      } else {
        setEmail("Unknown User");
      }
    }, [LoggedInUserInformationObject]);

     // set page title for current page
        useEffect(() => {
          window.document.title = "Page - Account | Subscription"
        });
  
  return (
    <>
      <NavigationBarComponent />
      <section className="subscription-page">
        <form
          action="https://keep-memories-photo-gallery-api-service.onrender.com/api/user/account/newsletter/subscription"
          method="post"
        >
          <h1>
            <MdOutlineUnsubscribe />
          </h1>
          <h2>
            Newsletter Subscription
          </h2>
          <p>
            Dear {
              LoggedInUserInformationObject?.data?.username
                ? LoggedInUserInformationObject?.data?.username
                : "Unknown User"
            } we are glad that you joined our community. We are
            excited to have you here. We will be sending you newsletters and
            updates about our services and products. You can subscribe at any
            to this our newsletter. We are looking forward to having you here.

          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            aria-required
            value={email}
          />
          <button type="submit">Continue Subscription</button>
        </form>
      </section>
      <WelcomeCookieAlertMessage />
      <OfflineMessageComponent />
      <FooterComponent />
    </>
  );
};

export default SubscribingPage;
