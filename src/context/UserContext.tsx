import React from "react";
// interface User {
//   login_id: string;
//   date: string;
//   request_id: string;
//   error: any;
//   request_status: number;
//   data: { 
//     username: string;
//     email: string;
//     token: string;
//     message: string;
//     status: string;
//     signedUp: boolean;
//   };
// }

const LoggedInUserInformationObjectContent: any = React.createContext(
  window.localStorage.getItem("user")
);
export default LoggedInUserInformationObjectContent;
