import React, { createContext, useState } from 'react'
export const storeContext = createContext()
const Context = (props) => {
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
    // make API call to register user with userDetails
  }

  const values = {
    carRent,
    setCarRent,
    handleChange,
    handleSubmit,
    userDetails,
    setUserDetails
  }
  return (
    <storeContext.Provider value={{values}}>
      {props.children}
    </storeContext.Provider>
  )
}

export default Context