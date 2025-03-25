import express from "express"
import { bookaRide, bookRide, getBookings, processBookingPayment, verifyBookingPayment } from "../controller/book.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/book", verifyToken, bookRide)
router.post("/", bookaRide)
router.get("/", getBookings)
router.post("/payment", processBookingPayment)
router.post("/verify", verifyBookingPayment)

export default router