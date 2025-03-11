import axios from "axios"
import prisma from "../utils/prisma.js"

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