import express from "express"
import { bookaRide, bookRide } from "../controller/book.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/text", verifyToken, bookRide)
router.post("/", verifyToken, bookaRide)

export default router