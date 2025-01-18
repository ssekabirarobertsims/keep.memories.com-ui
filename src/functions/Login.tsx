async function Login(email: string, password: string) {
  const request = await fetch(
    "https://keep-memories-com-api.onrender.com/login",
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
    ).textContent = response.message;
    window.setTimeout(() => {
      window.localStorage.setItem("admin", JSON.stringify(response));
      window.location.href = "/";
    }, 3000 as number);
  } else {
    (
      window.document.querySelector(".login-alert-message") as HTMLElement
    ).textContent = response.message;
  }
}

export default Login;
