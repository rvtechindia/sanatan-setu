import axios from "axios";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const apiURL = "http://52.66.174.13:3001";

export const postRequest = async (data) => {
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

export const getRequest = async (url) => {
  const result = await axios.get(`${apiURL}/${url}`);
  return result;
};
