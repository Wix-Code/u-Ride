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