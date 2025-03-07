export const verifyToken = async (req, res) => {
  const token = req.cookie.accessToken;
  if (!token) {
    return res.status(403).json({ success: false, message: "Access denied. No token provided" });
  }
  try {
   
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = await userModel.findById(decoded.id).select("-password"); 
    if (!req.user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log(req.user, "user")
    next();
  } catch (error) {
    console.log(error)
    return res.status(403).json({ success: false, message: "Access denied. Invalid token" });
  }
}