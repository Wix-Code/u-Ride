import prisma from "../utils/prisma.js"

export const rental = async (req, res) => {
  const userId = req.user
  const { name, email, ...others } = req.body;
  if (!userId) {
    return res.status(404).json({success: true, message: "Not authorised"})
  }
  try {
    const rent = await prisma.rent.create({
      data: {
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