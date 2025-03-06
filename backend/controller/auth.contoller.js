import { Prisma} from "@prisma/client";
import prisma from "../utils/prisma.js";
import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email ||!name ||!password) {
    return res.status(400).json({ success: false, message: "Please provide all required fields" });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ success: false, message: "Email already in use" });
  }

  if(!validator.isEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  if (password < 8) {
    return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = await prisma.user.create(
      {
        data: {
          email,
          name,
          password:hashedPassword,
        },
      },
    )
    res.status(201).json({ success: true, message: "User successfully registered", user });
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "Failed to register user" });
  }
}

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const { password, ...others } = user;

    const token = jwt.sign({ userId: user.id }, process.env.JWT_TOKEN, { expiresIn: "1hr" })
    

    return res.cookie("accessToken", token).status(201).json({ success: true, message: "Login successful", others, token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "Failed to login user" });
  }
}

export const logout = async () => {
  try {
    return res.clearCookie("accessToken").status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to logout user" });
  }
}