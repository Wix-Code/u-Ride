import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma";

export const register = async () => {
  const { email, name, password } = req.body;
  try {
    const user = await prisma.user.create(
      {
        data: {
          email,
          name,
          password,
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