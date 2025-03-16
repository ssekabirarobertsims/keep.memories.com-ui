import PublicPage from "./pages/Public.Page";
import LoginPage from "./pages/Login.Page";
import SignupPage from "./pages/Signup.Page";
import { Route, Routes } from "react-router-dom";
import LoggedInUserInformationObjectContent from "./context/UserContext";
import React from "react";
import FilterBar from "./pages/Filter.Bar.Page";
import CodeValidationForm from "./components/Email.Verification.Code.Form.Component";
import BlankVerificationPage from "./pages/Blank.Verification.Page";
import BlankAuthStatusPage from "./pages/Blank.Auth.Status.Page";
import Categories from "./pages/Categories.Page";
import NewsLetterSubscriptionBlankPage from "./pages/Blank.Newsletter.Verification.Page";
import LogoutLoggedInUserAccount from "./functions/User.Logout.Function";
import SubscribingPage from "./pages/Subscription.Page";
LogoutLoggedInUserAccount();

function App() {
  const context: string | null = React.useContext(LoggedInUserInformationObjectContent) as
    | string
    | null;
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

  return (
    <Routes>
      <Route index element={<PublicPage />}></Route>
      <Route
        path="/account/login"
        element={user ? <BlankAuthStatusPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/account/signup"
        element={user ? <BlankAuthStatusPage /> : <SignupPage />}
      ></Route>
      <Route
        path="/signup/account/verification/code/form"
        element={user ? <PublicPage /> : <CodeValidationForm />}
      ></Route>
      <Route
        path="/signup/account/verification/status"
        element={user ? <PublicPage /> : <BlankVerificationPage />}
      ></Route>
      <Route
        path="/email/newsletter/subscription/verification"
        element={<NewsLetterSubscriptionBlankPage />}
      ></Route>
      <Route path="/photos/*" element={<Categories />}></Route>
      <Route path="/filter/searches" element={<FilterBar />}></Route>
      <Route
        path="/newsletter/subscriptions"
        element={!user ? <LoginPage /> : <SubscribingPage />}
      ></Route>
    </Routes>
  );
}

export default App;
