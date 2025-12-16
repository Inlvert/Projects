import axios from "axios";
import CONSTANTS from "../constants";


const httpClient = axios.create({
  baseURL: CONSTANTS.HTTP_SERVER_URL,
});

export const getUser = async (id, token) => {
  const response = await httpClient.get(`/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
