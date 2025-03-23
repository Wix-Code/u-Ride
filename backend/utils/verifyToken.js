import jwt from "jsonwebtoken"
import prisma from "./prisma.js";
export const verifyToken = async (req, res, next) => {
  const token = req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ success: false, message: "Access denied. No token provided" });
  }
  try {
   
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, name: true }, // Excluding password
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user;
    console.log(req.user, "user");
    next();
  } catch (error) {
    console.log(error)
    return res.status(403).json({ success: false, message: "Access denied. Invalid token" });
  }
}