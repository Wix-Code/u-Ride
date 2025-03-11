import axios from "axios"
import prisma from "../utils/prisma.js"
import { paystack } from "../utils/paystackApi.js";

export const bookRide = async () => {
  const userId = req.user;
  const { pickupLocation, dropoffLocation, date, time, amount, ...others } = req.body;
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  try {
    const kl = 2000;

    const book = await prisma.ride.create({
      data: {
        userId,
        pickupLocation,
        dropoffLocation,
        date,
        time,
       ...others,
      },
    });
    res.status(201).json({ success: true, message: "Ride booked successfully", book });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to book a ride" });
  }
}

export const bookaRide = async (req, res) => {
  const { fname, email, phoneNo, age, pickupLocation, DropoffLocation, pickupCoords, dropoffCoords } = req.body;
  const userId = Number(req?.user?.id)
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }
  
        
  try {
     // Calculate distance using OpenRouteService API
     const orsResponse = await axios.post(
      `https://api.openrouteservice.org/v2/matrix/driving-car`,
      {
          locations: [pickupCoords, dropoffCoords],
          metrics: ['distance'],
      },
      { headers: { Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,"Content-Type": "application/json" } }
  );

  const distanceInMeters = orsResponse.data.distances[0][1];
  const distanceInKm = distanceInMeters / 1000;
  const amount = distanceInKm * 250; // Example: ₦250 per km

  // Save booking in database
  const booking = await prisma.book.create({
      data: {
          fname,
          email,
          phoneNo,
          age,
          userId,
          pickupLocation,
          DropoffLocation,
          amount: Math.round(amount),
          date: new Date(),
          time: new Date().toLocaleTimeString(),
      },
  });

  res.status(201).json({ success: true, message: 'Booking created. Proceed to payment.', booking });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to send text" });
  }
}

export const getBookings = async (req, res) => {
  /*const userId = Number(req?.user?.id)
  if (!userId) {
    return res.status(404).json({ success: true, message: "Not authorised" });
  }*/
  try {
    const bookings = await prisma.book.findMany();
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to get bookings" });
  }
}

const url = "http://localhost:5173/"
export const processBookingPayment = async (req, res) => {
  const { bookId } = req.body;
  const userId = Number(req?.user?.id);
  if (!userId) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }
  try {
    const book = await prisma.book.findUnique({
      where: { id: bookId },
      select: { id: true, email: true, amount: true },
    })
    if (!book) {
      return res.status(404).json({ success: false, message: "Booking record not found" });
    }

    if (!book.amount || book.amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid booking amount" });
    }
    const response = await paystack.transaction.initialize({
      email: book.email,
      amount: Math.round(book.amount * 100),
      currency: "NGN",
      callback_url: `${url}/verify?orderId=${bookId}`,
    });
    
    res.status(200).json({ success: true, message: "Payment initialized successfully", data: response });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to make payment" });
  }
}

export const verifyBookingPayment = async (req, res) => {
  const { orderId } = req.query;
}