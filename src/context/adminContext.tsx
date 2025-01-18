import React from "react";
const adminContext = React.createContext(window.localStorage.getItem("admin"));
export default adminContext;
