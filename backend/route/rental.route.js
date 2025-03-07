import express from "express"
import { rent } from "../controller/rental.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/", verifyToken, rent)

export default router