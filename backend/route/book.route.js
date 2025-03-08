import express from "express"
import { bookRide } from "../controller/book.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/", verifyToken, bookRide)

export default router