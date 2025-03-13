import React, { createContext, useState } from 'react'
export const storeContext = createContext()
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Context = (props) => {
  const navigate = useNavigate()
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
      navigate("/")
    }
    console.log(res.data)
    // make API call to register user with userDetails
  }


  const values = {
    carRent,
    setCarRent,
    handleChange,
    handleSubmit
  }
  return (
    <storeContext.Provider value={values}>
      {props.children}
    </storeContext.Provider>
  )
}

export default Context