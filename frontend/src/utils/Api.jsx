import axios from "axios";

const Api = axios.create({
  baseURL: "https://u-ride.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;