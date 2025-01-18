import axios from "axios";

async function useSearch() {
  const request = await axios.get(
    "https://keep-memories-rest-api.onrender.com/resources",
    {
      headers: {
        Authorization: "",
      },
    }
  );

  const response = await request.data;
  console.log(response);
}

export default useSearch;
