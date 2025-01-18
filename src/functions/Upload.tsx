async function Upload(
  title: string,
  file: string,
  category: string,
  admin: string,
  share: boolean,
  token: string
): Promise<void> {
  const request = await fetch(
    "https://keep-memories-rest-api.onrender.com/admin/uploaded/resources",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token ? token : ""}`,
      },
      body: JSON.stringify({
        title: title,
        resource: file,
        category: category,
        admin: admin,
        share: share === (true as boolean) ? (true as boolean) : ("" as string),
      }),
    }
  );

  const response = await request.json();
  (window.document.querySelector(".warning") as HTMLElement).textContent =
    response.message;
  console.log(response);
}

export default Upload;
