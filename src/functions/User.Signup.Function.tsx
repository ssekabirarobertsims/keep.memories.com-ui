async function Signup(username: string, email: string, password: string) {
  try {
    const request = await fetch(
      "https://keep-memories-photo-gallery-api-service.onrender.com/api/user/account/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: "",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );

    const response = await request.json();

    if (request.ok) {
      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).style.display = "flex";

      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).textContent = response.message;

      window.setTimeout(() => {
        (
          window.document.querySelector(
            ".login-spinner-wrapper"
          ) as HTMLDivElement
        ).style.display = "none";

        window.location.href = "/signup/account/verification/code/form";
      }, 3000 as number);
    } else { 
      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).textContent = response.message;

      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).style.display = "flex";
    }
  } catch (error) {
    console.log(error);

    (
      window.document.querySelector(".signup-spinner-wrapper") as HTMLDivElement
    ).style.display = "flex";

    setTimeout(() => {
      (
        window.document.querySelector(
          ".signup-spinner-wrapper"
        ) as HTMLDivElement
      ).style.display = "none";

      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).style.display = "flex";

      (
        window.document.querySelector(".signup-alert-message") as HTMLElement
      ).textContent = "Please check your network!";
    }, 4000 as number);
  }
}

export default Signup;
