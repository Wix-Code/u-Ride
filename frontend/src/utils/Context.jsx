import React, { createContext, useEffect, useState } from 'react'
export const storeContext = createContext()
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Api from './Api'
import { toast } from 'react-toastify'
const Context = (props) => {
  const navigate = useNavigate()
  const [carData, setCarData] = useState([])
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false)
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })

  const [carRent, setCarRent] = useState({
    city: "",
    fname: "",
    email: "",
    age: "",
    price: "",
    phoneNo: "",
    rentalType: "",
    startDate: "",
    endDate: "",
  })
  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value })
  }
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  console.log(userId, "userId")

  useEffect(() => {
    console.log("Token updated:", token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      console.log(userDetails)
      const res = await Api.post("/auth/login", userDetails, {
        withCredentials: true
      })
      if (res.data.token) {
        setToken(res?.data?.token); // Updates state
        localStorage.setItem("user", JSON.stringify(res?.data?.others)); // Stores token in localStorage
        localStorage.setItem("token", res?.data?.token); // Stores token in localStorage
        toast.success("Logged in successfully")
        navigate("/");
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to register")
      setLoading(false)
    }
  }

 
  
  const fetchData = async () => {
    try {
      const res = await Api.get("/cars", {
        withCredentials: false
      });
      setCarData(res.data.cars)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    //console.log("Updated carData:", carData);
  }, [carData]);

  const values = {
    carRent,
    setCarRent,
    handleChange,
    loading,
    userId,
    carData,
    token,
    handleSubmit
  }
  return (
    <storeContext.Provider value={values}>
      {props.children}
    </storeContext.Provider>
  )
}

export default Context