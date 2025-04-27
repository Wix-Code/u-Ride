import axios from "axios";

const Api = axios.create({
  baseURL: "https://u-ride-1.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    //Authorization: token ? `Bearer ${token}` : "",
  },
});

export default Api;