import axios from "axios";


const Api = axios.create({
  baseURL: "https://u-ride.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
   // Authorization: `Bearer ${token}`,
  },
  withCredentials: true, // Include cookies for authenticated requests,
});

export default Api;