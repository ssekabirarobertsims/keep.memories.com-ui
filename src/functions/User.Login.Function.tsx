async function Login(email: string, password: string) {
  try {
    const request = await fetch(
      "https://keep-memories-photo-gallery-api-service.onrender.com/api/user/account/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const response = await request.json();

    if (request.ok) {
      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).style.display = "flex";

      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).textContent = response.message;

      window.setTimeout(() => {
        (
          window.document.querySelector(
            ".login-spinner-wrapper"
          ) as HTMLDivElement
        ).style.display = "none";
        window.localStorage.setItem("user", JSON.stringify(response));
        window.location.href = "/";
      }, 3000 as number);
    } else {
      (
        window.document.querySelector(
          ".login-spinner-wrapper"
        ) as HTMLDivElement
      ).style.display = "none";

      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).style.display = "flex";

      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).textContent = response.message;
    }
  } catch (error) {
    console.log(error);

    (
      window.document.querySelector(".login-spinner-wrapper") as HTMLDivElement
    ).style.display = "flex";

    setTimeout(() => {
      (
        window.document.querySelector(
          ".login-spinner-wrapper"
        ) as HTMLDivElement
      ).style.display = "none";

      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).style.display = "flex";

      (
        window.document.querySelector(".login-alert-message") as HTMLElement
      ).textContent = "Please check your network!";
    }, 4000 as number);
  }
}

export default Login;
