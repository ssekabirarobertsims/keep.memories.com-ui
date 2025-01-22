import { IoMdClose } from "react-icons/io";
import React from "react";
import adminContext from "../context/adminContext";
// import Upload from "../functions/Upload";
interface Admin {
  id: string;
  email: string;
  username: string;
}

const UploadPhotoForm: React.FC = () => {
  const context: string = React.useContext(adminContext) as string;
  const admin: Admin = JSON.parse(context) as Admin;
  console.log(admin);

  return (
    <section className={String("upload-form")}>
      <form
        action="https://keep-memories-com-api.onrender.com/admin/uploaded/resources"
        method="post"
        encType="multipart/form-data"
      >
        <h1>Insert photo url to upload!</h1>
        <br />
        <input type="file" name="file" id="file" required aria-required />
        <br />
        <select name="categories" id="categories">
          <option value={String("people")}>people</option>
          <option value={String("nature")}>nature</option>
          <option value={String("dark")}>dark</option>
          <option value={String("technology")}>technology</option>
          <option value={String("animals")}>animals</option>
          <option value={String("food")}>food</option>
          <option value={String("illustrations")}>illustrations</option>
          <option value={String("sports")}>sports</option>
        </select>
        <input
          type="text"
          name="admin"
          id="admin"
          value={admin.username as string}
          style={{
            display: "none",
          }}
          required
          aria-required
        />
        <br />
        {admin ? (
          <div className="checkbox">
            <input type="checkbox" name="share_status" id="share-status" />
            <label htmlFor="check">Share to public gallery!</label>
          </div>
        ) : (
          ""
        )}
        <p className="warning"></p>
        <br />
        <button
          type="submit"
          onClick={(event) => {
            event.stopPropagation();
            const file = (
              window.document.querySelector("#file") as HTMLInputElement
            ).value;
            const categories = (
              window.document.querySelector("#categories") as HTMLInputElement
            ).value;
            const warningElement = window.document.querySelector(
              ".warning"
            ) as HTMLElement;

            if (file === null) {
              (
                window.document.querySelector(".warning") as HTMLElement
              ).textContent = "All fields are required!";
            } else if (categories === "") {
              warningElement.textContent = "All fields are required!";
            }
          }}
        >
          Upload Photo
        </button>
        <span
          onClick={(event) => {
            event.stopPropagation();
            (
              window.document.querySelector(".upload-form") as HTMLElement
            ).style.display = "none";
          }}
        >
          <IoMdClose />
        </span>
      </form>
    </section>
  );
};

export default UploadPhotoForm;
