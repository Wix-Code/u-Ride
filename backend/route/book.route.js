import express from "express"
import { bookaRide, bookRide, getBookings, processBookingPayment, verifyBookingPayment } from "../controller/book.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/text", verifyToken, bookRide)
router.post("/", verifyToken, bookaRide)
router.get("/", getBookings)
router.post("/payment", verifyToken, processBookingPayment)
router.post("/verify", verifyToken, verifyBookingPayment)

export default router