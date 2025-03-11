import express from "express"
import { bookRide, text } from "../controller/book.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/", verifyToken, bookRide)
router.post("/text", verifyToken, text)

export default router