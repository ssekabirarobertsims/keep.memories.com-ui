import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { format } from "date-fns";
export const dateContext = React.createContext(format(new Date(), "yyyy"));
import adminContext from "./context/adminContext.js";
import "./stylesheets/main.stylesheet.css";
import "./stylesheets/main.stylesheet-2.css";
import "./stylesheets/main.stylesheet-3.css";
import "./stylesheets/main.stylesheet-4.css";
import "./stylesheets/responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <adminContext.Provider value={window.localStorage.getItem("admin")}>
              <dateContext.Provider value={format(new Date(), "yyyy")}>
                <App />
              </dateContext.Provider>
            </adminContext.Provider>
          }
        ></Route>
      </Routes>
    </Router>
  </StrictMode>
);
