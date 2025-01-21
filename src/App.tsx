import PublicPage from "./pages/Public.Page";
import LoginPage from "./pages/Login.Page";
import SignupPage from "./pages/Signup.Page";
import { Route, Routes } from "react-router-dom";
import adminContext from "./context/adminContext";
import React, { useEffect } from "react";
import AboutPage from "./pages/About.Us.Page";
import ContactPage from "./pages/Contact.Us.Page";
import FilterBar from "./pages/Filter.Bar.Page";
import CodeValidationForm from "./components/Email.Verification.Code.Component";
import BlankVerificationPage from "./pages/Blank.Verification.Page";
import BlankAuthStatusPage from "./pages/Blank.Auth.Status.Page";
import Categories from "./pages/Categories.Page";
import NewsLetterSubscriptionBlankPage from "./pages/Blank.Newsletter.Verification.Page";
import LogoutAdmin from "./functions/LogoutAdmin";

function App() {
  const context: string | null = React.useContext(adminContext) as
    | string
    | null;
  const admin = JSON.parse(context as string);

  useEffect(() => {
    LogoutAdmin();
  });

  (window.document.querySelector("body") as HTMLBodyElement).addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      (
        window.document.querySelector(".account-view-component") as HTMLElement
      ).style.display = "none";
    }
  );

  return (
    <Routes>
      <Route index element={<PublicPage />}></Route>
      <Route path="/contact-us" element={<ContactPage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
      <Route
        path="/login"
        element={admin ? <BlankAuthStatusPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/signup"
        element={admin ? <BlankAuthStatusPage /> : <SignupPage />}
      ></Route>
      <Route
        path="/signup/account/verification/code"
        element={admin ? <PublicPage /> : <CodeValidationForm />}
      ></Route>
      <Route
        path="/signup/account/verification/status"
        element={admin ? <PublicPage /> : <BlankVerificationPage />}
      ></Route>
      <Route
        path="/email/newsletter/subscription/verification"
        element={<NewsLetterSubscriptionBlankPage />}
      ></Route>
      <Route path="/photos/*" element={<Categories />}></Route>
      <Route path="/filter/searches" element={<FilterBar />}></Route>
    </Routes>
  );
}

export default App;
