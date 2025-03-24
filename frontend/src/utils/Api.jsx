import axios from "axios";

//const token = localStorage.getItem("token")
//const token = user?.token; 
//console.log(token, "Api")

const Api = axios.create({
  baseURL: "https://u-ride.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    //Authorization: token ? `Bearer ${token}` : "",
  },
});

export default Api;

//https://u-ride.onrender.com
//http://localhost:5000/api