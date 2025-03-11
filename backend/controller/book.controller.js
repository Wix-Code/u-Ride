import axios from "axios"
import prisma from "../utils/prisma.js";
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of Earth in KM
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Pricing Formula (Base Fare: 500, Per KM: 200, Min Fare: 1000)
const calculateFare = (distance, baseFare = 500, perKmRate = 200, minFare = 1000) => {
  const totalFare = baseFare + distance * perKmRate;
  return totalFare < minFare ? minFare : totalFare;
};

// Convert Address to Lat/Lon (Google Maps API)
const getCoordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  const response = await axios.get(url);

  if (response.data.status === "OK") {
    const { lat, lng } = response.data.results[0].geometry.location;
    return { lat, lng };
  } else {
    throw new Error("Failed to get coordinates");
  }
};

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

export const text = async (req, res) => {
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