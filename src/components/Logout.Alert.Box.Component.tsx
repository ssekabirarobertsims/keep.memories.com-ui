function LogoutAlertBox() {
  return (
    <section className="logout-alert-box">
      <div>
        <h1>Confirm Logout</h1>
        <p>Are you sure you want to log out of your account!</p>
        <div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              (
                window.document.querySelector(
                  ".logout-alert-box"
                ) as HTMLElement
              ).style.display = "none";
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              window.setTimeout(() => {
                window.localStorage.removeItem("admin");
                window.location.href = "/login";
              }, 10);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogoutAlertBox;
