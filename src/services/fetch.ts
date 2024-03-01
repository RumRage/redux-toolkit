import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com";

export const get = async (url: string) => {
  try {
    const response = await axios.get(`${baseURL}/${url}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};
