import axios from "axios";


const Api = axios.create({
  baseURL: "https://u-ride.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
   // Authorization: `Bearer ${token}`,
  },
});

export default Api;