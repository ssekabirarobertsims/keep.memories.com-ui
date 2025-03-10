import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { MdOutlineUnsubscribe } from "react-icons/md";
import WelcomeCookieAlertMessage from "../components/Welcome.Cookie.Alert.Message.Component";
import OfflineMessageComponent from "../components/Offline.Message.Component";

const SubscribingPage: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  return (
    <>
      <NavigationBarComponent />
      <section className="subscription-page">
        <form
          action="https://keep-memories-com-api.onrender.com/newsletter/account/subscription"
          method="post"
        >
          <h1>
            <MdOutlineUnsubscribe />
          </h1>
          <h2>Subscribe to our newsletter</h2>
          <p>
            Subscribe to our newsletter to get the latest updates and news on
            our latest uploads and updates.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            aria-required
            onInput={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
          <br />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <WelcomeCookieAlertMessage />
      <OfflineMessageComponent />
      <FooterComponent />
    </>
  );
};

export default SubscribingPage;
