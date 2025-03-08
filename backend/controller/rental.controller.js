import prisma from "../utils/prisma.js"

export const rental = async (req, res) => {
  const userId = req.user
  const { name, email, startDate, endDate, ...others } = req.body;
  if (!userId) {
    return res.status(404).json({success: true, message: "Not authorised"})
  }
  const formattedDate = new Date(startDate).toISOString();
  const formattedEndDate = new Date(endDate).toISOString();
  try {
    const rent = await prisma.rent.create({
      data: {
        userId,
        startDate : formattedDate,
        endDate : formattedEndDate,
        name,
        email,
        ...others,
      },
     }
    )
    res.status(201).json({ success: true, message: "Car rented successfully", rent });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to rent a car" });
  }
}