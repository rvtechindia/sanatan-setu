import axios from "axios";

export const apiURL = "http://52.66.174.13:3001";

export const postRequest = async (data) => {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
  const result = await axios
    .post(apiURL, data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  return result;
};
