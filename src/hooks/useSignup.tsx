async function useSignup(username: string, email: string, password: string) {
  const request = await fetch(
    "https://keep-memories-rest-api.onrender.com/signup",
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
    ).textContent = response.message;
    window.setTimeout(() => {
      window.location.href = "/signup/account/verification/code";
    }, 3000 as number);
  } else {
    (
      window.document.querySelector(".signup-alert-message") as HTMLElement
    ).textContent = response.message;
  }
}

export default useSignup;
