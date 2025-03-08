export const bookRide = async () => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to book a ride" });
  }
}