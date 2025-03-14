import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { storeContext } from '../utils/Context'

const SinglePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState([])
  const { token } = useContext(storeContext)
  const [amount, setAmount] = useState(null)
  const [rentData, setRentData] = useState(null)
  
  const [carRent, setCarRent] = useState({
    city: "",
    fname: "",
    email: "",
    age: "",
    time: "",
    phoneNo: "",
    rentalType: "",
    startDate: "",
    endDate: "",
  })
 console.log(id)
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`http://localhost:5000/api/cars/${id}`, {
        withCredentials: false,
        headers: { "Content-Type": "application/json" }
      })
      setCar(response.data.car)
      console.log(response, "iddd")
      console.log(car)
    }

    fetch()
  }, [id])
  
  const handleInputChange = (e) => {
    setCarRent({...carRent, [e.target.name]: e.target.value })
  }
  const submitDetails = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please log in to book a car");
      navigate('/login');
      return;
    }

    console.log(carRent);

    let startDate = carRent.startDate ? new Date(carRent.startDate) : null;
    let endDate = carRent.endDate ? new Date(carRent.endDate) : null;
    const age = parseInt(carRent.age);

    if (startDate && isNaN(startDate.getTime())) {
      alert("Invalid start date format. Please enter a valid date.");
      return;
    }

    if (endDate && isNaN(endDate.getTime())) {
      alert("Invalid end date format. Please enter a valid date.");
      return;
    }

    const updatedCarRent = {
      ...carRent,
      id: id,
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      age: age
    };

    console.log(id, "user");

    try {
      const response = await axios.post(
        `http://localhost:5000/api/cars/calculate`,
        updatedCarRent,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setAmount(response.data.totalPrice);
      setRentData(response.data.rent);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/cars/process", { 
        rentId: rentData.id, 
        email: rentData.email, 
        price: amount 
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response)
      if (response.data.data.status === true) {
        console.log(response.data.data.data.authorization_url)
        window.location.replace(response.data.data.data.authorization_url);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col gap-10 font-display'>
      <div>
        <img src="" alt="" />
      </div>
      <div className='flex gap-10 lg:flex-row sm:mx-5 sm:flex-col max-w-[1100px] lg:m-auto'>
        <div className='flex-1 flex flex-col gap-10'>
          <h1 className='text-[30px] font-extrabold text-[#28a745] text-center '>{car.name}</h1>
          <img src={car.image} alt="" />
          <img src="https://mlszn6rjkywy.i.optimole.com/w:1920/h:146/q:mauto/f:best/https://nairaxi.ng/wp-content/uploads/2024/03/3-advantages-of-using-flexible-rental-car-hire-NAIRAXI.png" alt="" />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Type:</p>
            <p className='lg:text-[18px] sm:text-[16px]'>{car.type}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Model:</p>
            <p className='lg:text-[18px] sm:text-[16px]'>{car.model}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Passengers:</p>
            <p className='lg:text-[18px] sm:text-[16px]'>{car.capacity}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Luggage Capacity:</p>
            <p className='lg:text-[18px] sm:text-[16px]'>{car.luggage}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Half Day Hire (Min 5 Hours):</p>
            <p className='lg:text-[18px] sm:text-[16px]'>starting at {car.halfDay}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Full Day Hire (Min 10 Hours):</p>
            <p className='lg:text-[18px] sm:text-[16px]'>starting at {car.fullDay}</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='lg:text-[18px] sm:text-[16px] text-[#3c3c3c] font-medium'>Additional Hour:</p>
            <p className='lg:text-[18px] sm:text-[16px]'>starting at {car.addHor}</p>
          </div>
          <i className='text-red-600 font-medium text-[15px]'>Note, these prices are not fixed. It is subject to variations if you are booking a newer or an older model.</i>
          <div className='flex lg:gap-5 lg:flex-row sm:flex-col sm:gap-2'>
            <button className='bg-[#28a745] lg:w-[200px] sm:w-full text-white py-3 font-medium'><a href="tel:+">Whatsapp now</a></button>
            <button className='bg-[#28a745] lg:w-[200px] sm:w-full text-white py-3 font-medium'><a href="tel:+">Contact now</a></button>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:mx-5 gap-5 max-w-[750px] lg:m-auto'>
        <h1 className='lg:text-[22px] sm:text-[18px] text-[#1d274e] font-extrabold'>Experience Unmatched Comfort and Convenience: Hire Mercedes Sprinter Bus with Nairaxi Prestige Car Rentals in Nigeria</h1>
        <p className='text-[#868e96] lg:text-[16px] sm:text-[14px]'>When it comes to transporting large groups with style, comfort, and efficiency, Nairaxi Prestige Car Rentals offers an exceptional solution. If you are planning a corporate event, a family reunion, or a group outing, hire Mercedes Sprinter Bus and ensure your journey is both comfortable and luxurious.</p>
        <p className='text-[#868e96] lg:text-[16px] sm:text-[14px]'>The Mercedes Sprinter Bus is renowned for its spaciousness, advanced features, and superior ride quality. This versatile vehicle is perfect for those who demand the best in group transportation, offering ample room for passengers and luggage while maintaining the highest standards of luxury and convenience. At Nairaxi, we take pride in maintaining our fleet of Mercedes Sprinter Buses to the highest standards, ensuring each vehicle is in pristine condition and ready to provide an unforgettable travel experience.</p>
      </div>
      <div className='bg-[#28a745] text-white text-center lg:px-52 lg:py-20 flex flex-col lg:gap-8 sm:px-5 sm:py-10 sm:gap-3'>
        <p className='lg:text-[22px] sm:text-[16px] font-medium'>RIDE IN STYLE</p>
        <h1 className='font-extrabold sm:text-[18px] lg:text-[50px]'>Comfort. Prompt. Professional</h1>
        <p className='lg:text-[22px] font-medium sm:leading-5 lg:leading-10 sm:text-[14px]'>Included in all transportation services are one (1) uniformed driver, complimentary water, WIFI, charging and complimentary snacks. Driver will be present at the pickup location fifteen (15) minutes before scheduled pickup time.</p>
      </div>
      <div className='lg:max-w-[800px] sm:mx-5 lg:m-auto flex flex-col sm:gap-2 lg:gap-4 border-[1px] border-[#dddddd] lg:p-10 sm:p-5'>
        <h1 className='text-[18px] text-[#1d274e] font-bold text-center'>Hire Mercedes Sprinter Bus</h1>
        <h2 className='lg:text-[22px] text-center text-[#1d274e] sm:text-[16px] font-extrabold'>RESERVE YOUR VEHICLE TODAY!</h2>
        <p className='text-[#868e96] lg:text-center lg:text-[16px] sm:text-[14px] sm:text-justify'>Our team of experienced drivers will provide you with stress-free travel, reliable service for all your needs in ground transportation. We give you upfront pricing, crystal clear communication, and an excellent customer experience every time.</p>
        <div className='flex flex-col mt-5 lg:gap-5 sm:gap-2'>
          <p className='lg:text-[16px] sm:text-[16px] font-bold text-[#1d274e]'>Personal Information</p>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Your Name</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' onChange={handleInputChange} id='name' name='fname' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Email</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='text' onChange={handleInputChange} id='name' name='email' required />
            </div>
          </div>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Age</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='number' onChange={handleInputChange} id='name' name='age' required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Phone No</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' onChange={handleInputChange} type='text' id='name' name='phoneNo' required />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-5 mt-5 sm:gap-2'>
          <p className='lg:text-[16px] sm:text-[16px] font-bold text-[#1d274e]'>Itinerary Information</p>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'  htmlFor="">Rental Type</label>
              <select className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' onChange={handleInputChange} name="rentalType" id="" required >
                <option>Select</option>
                <option value="halfDay">&#8358;{new Intl.NumberFormat('en-US').format(car.halfDay)}</option>
                <option value="fullDay">&#8358;{new Intl.NumberFormat('en-US').format(car.fullDay)}</option>
                <option value="multiDay">More than a day</option>
              </select>
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]'  htmlFor="">Pickup Time</label>
              <select className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' onChange={handleInputChange} name="time" id="" required >
                <option>Select</option>
                <option value="9AM">9AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                <option value="1PM">1PM</option>
                <option value="2PM">2PM</option>
              </select>
            </div>
          </div>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Pickup Date</label>
              <input className='border-[1px] w-full focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='date' id='' name='startDate' onChange={handleInputChange} required />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>End Date Time</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' type='date' id='' onChange={handleInputChange} name='endDate' required />
            </div>
          </div>
          <div className='flex gap-2 lg:flex-row sm:flex-col'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>Age</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' onChange={handleInputChange} type='text' id='name' name=''  />
            </div>
            <div className='flex flex-col gap-2 w-full '>
              <label className='lg:text-[16px] text-[#4f5050] sm:text-[14px]' htmlFor='name'>City</label>
              <input className='border-[1px] focus:border-[#28a745] outline-none px-5 border-[#dddddd] h-[52px]' onChange={handleInputChange} type='text' name='city' required />
            </div>
          </div>
        </div>
        <button onClick={submitDetails} className='bg-[#28a745] mt-5 cursor-pointer text-[16px] uppercase text-white px-10 h-[52px]'>Submit Request</button>
        {
          amount !== null && (
            <div className='flex flex-col gap-2'>
              <h2 className='text-center font-bold lg:text-[24px] sm:text-[20px]'>Total Amount: &#8358;{new Intl.NumberFormat('en-US').format(amount)}</h2>
              <button className='bg-[#ffffff] mt-5 cursor-pointer text-[16px] uppercase border-[1px] border-[#28a745] text-white px-10 h-[52px]' onClick={handlePayment}>Proceed to Payment</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SinglePage