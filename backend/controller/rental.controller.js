import { Prisma } from "@prisma/client"
import prisma from "../utils/prisma"

export const rent = async (req, res) => {

  const userId = req.user
  if (userId) {
    return res.status(404).json({success: true, message: "Not authorised"})
  }
  try {
   const rent = await prisma.rent
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to rent a car" });
  }
}