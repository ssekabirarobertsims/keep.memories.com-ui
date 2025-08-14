import PublicPage from "./pages/Public.Page";
import LoginPage from "./pages/User.Account.Login.Page";
import SignupPage from "./pages/User.Account.Signup.Page";
import { Route, Routes } from "react-router-dom";
import LoggedInUserInformationObjectContent from "./context/UserContext";
import React, { useEffect } from "react";
import FilterBar from "./pages/Filter.Bar.Page";
import CodeValidationForm from "./components/Email.Verification.Code.Form.Component";
import BlankVerificationPage from "./pages/Blank.Verification.Page";
import BlankAuthStatusPage from "./pages/Blank.Auth.Status.Page";
import Categories from "./pages/Categories.Page";
import NewsLetterSubscriptionBlankPage from "./pages/Blank.Newsletter.Verification.Page";
import SubscribingPage from "./pages/Subscription.Page";
import NotFoundPage from "./pages/404";


function App() {
  const context: string | null = React.useContext(
    LoggedInUserInformationObjectContent
  ) as string | null;
  const user = JSON.parse(context as string);

  (window.document.querySelector("body") as HTMLBodyElement).addEventListener(
    "click",
    () => {
      if (window.document.querySelector(".search-list") as HTMLUListElement) {
        (
          window.document.querySelector(".search-list") as HTMLUListElement
        ).style.display = "none";
      }

      if (window.document.querySelector(".dd-menu-content") as HTMLElement) {
        (
          window.document.querySelector(".dd-menu-content") as HTMLElement
        ).style.display = "none";
      }

      if (
        window.document.querySelector(".account-view-component") as HTMLElement
      ) {
        (
          window.document.querySelector(
            ".account-view-component"
          ) as HTMLElement
        ).style.display = "none";
      }
    }
  );

   // This effect runs when the component mounts or when the adminAuthentication changes
  // Auto-logout effect (4 hour)
  useEffect(() => {
    // Set a timeout for auto-logout after 4 hours
    // This is to ensure that the admin is logged out after a certain period of inactivity
    const LOGOUT_TIMEOUT_MS = 4 * 60 * 60 * 1000; // 4 hour in milliseconds
    
    if(!user) return;

    // Set a timer to log out the user after 4 hour
    const logoutTimer = setTimeout(() => {
      window.localStorage.removeItem("user");
      window.location.href = "/account/login";
    }, LOGOUT_TIMEOUT_MS);

    return () => clearTimeout(logoutTimer);
  }, [user]);

  return (
    <Routes>
      <Route index element={<PublicPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/account/login"
        element={user ? <BlankAuthStatusPage /> : <LoginPage />}
       />
      <Route
        path="/account/signup"
        element={user ? <BlankAuthStatusPage /> : <SignupPage />}
       />
      <Route
        path="/signup/account/verification/code/form"
        element={user ? <PublicPage /> : <CodeValidationForm />}
       />
      <Route
        path="/signup/account/verification/status"
        element={user ? <PublicPage /> : <BlankVerificationPage />}
       />
      <Route
        path="/email/newsletter/subscription/verification"
        element={<NewsLetterSubscriptionBlankPage />}
       />
      <Route path="/photos/*" element={<Categories />} />
      <Route path="/filter/searches" element={<FilterBar />} />
      <Route
        path="/newsletter/subscriptions"
        element={!user ? <LoginPage /> : <SubscribingPage />}
       />
    </Routes>
  );
}

export default App;
