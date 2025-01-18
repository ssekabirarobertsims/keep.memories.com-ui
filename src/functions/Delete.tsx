import axios from "axios";
import adminContext from "../context/adminContext";
type Admin = string;
import React from "react";

async function Delete(id: string): Promise<void> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context: Admin = React.useContext(adminContext) as Admin;
  const current_admin = JSON.parse(context);

  const request = await axios.delete(
    `https://keep-memories-rest-api.onrender.com/admin/uploaded/resources/${id}`,
    {
      headers: {
        "Content-Type": "Application/json",
        Authorization: current_admin ? current_admin.token : "",
      },
    }
  );

  const response = await request.data;
  console.log(response);
}

export default Delete;
