import express from "express"
import { forgotPassword, login, logout, register, resetPassword } from "../controller/auth.contoller.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/forgot", forgotPassword)
router.post("/reset", resetPassword)

export default router