import React, { createContext, useEffect, useState } from 'react'
export const storeContext = createContext()
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Context = (props) => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [carData, setCarData] = useState([])
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userDetails)
    const res = await axios.post("http://localhost:5000/api/auth/login", userDetails, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    if (res.data) {
      localStorage.setItem(JSON.stringify(setToken(res.data.token)))
      navigate("/")
    }
    console.log(res.data)
    console.log(token, "token")
  }

 
  
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cars", {
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
    carData,
    handleSubmit
  }
  return (
    <storeContext.Provider value={values}>
      {props.children}
    </storeContext.Provider>
  )
}

export default Context