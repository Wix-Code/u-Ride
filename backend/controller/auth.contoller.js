import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma";

export const register = async () => {
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

export const login = async () => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}