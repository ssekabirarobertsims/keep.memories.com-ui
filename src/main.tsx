import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { format } from "date-fns";
export const dateContext = React.createContext(format(new Date(), "yyyy"));
import LoggedInUserInformationObjectContent from "./context/UserContext.js";
import "./stylesheets/main.stylesheet.css";
import "./stylesheets/main.stylesheet-2.css";
import "./stylesheets/main.stylesheet-3.css";
import "./stylesheets/main.stylesheet-4.css";
import "./stylesheets/main.stylesheet-5.css";
import "./stylesheets/responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <LoggedInUserInformationObjectContent.Provider value={window.localStorage.getItem("user")}>
              <dateContext.Provider value={format(new Date(), "yyyy")}>
                <App />
              </dateContext.Provider>
            </LoggedInUserInformationObjectContent.Provider>
          }
        ></Route>
      </Routes>
    </Router>
  </StrictMode>
);
