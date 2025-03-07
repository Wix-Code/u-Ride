import { Prisma} from "@prisma/client";
import prisma from "../utils/prisma.js";
import bcrypt from "bcrypt"
import validator from "validator"
import nodemailer from "nodemailer"
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

export const logout = async (req, res) => {
  try {
    return res.clearCookie("accessToken").status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to logout user" });
  }
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  try {
    const secret = process.env.JWT_TOKEN + user.password;
    const resetToken = jwt.sign({ userId: user.id, email: user.email }, secret, { expiresIn: "1hr" })
    const url = `http://localhost:5173/reset-password?id=${user.id}&token=${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Request',
      text: `Your reset password link: ${url}`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Reset password link sent to your email" }); 
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to send link" });
  }
}

export const resetPassword = async (req, res) => {
  const { id, token } = req.query;
  const { password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  })
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  try {
    const secret = process.env.JWT_TOKEN + user.password;
    const payload = jwt.verify(token, secret);
    if (!payload) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    //user.password = hashedPassword;
  
    await prisma.user.update(
      {
        where: {
          id: user.id,
        },
        data: {
          password: hashedPassword,
        },
      },
    );
  
    res.status(200).json({ success: true, message: "Password has been reset successfully", user });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to reset password" });
  }
}