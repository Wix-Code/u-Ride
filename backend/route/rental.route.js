import express from "express"
import { getRentals, rental } from "../controller/rental.controller.js"
import { verifyToken } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/", verifyToken, rental)
router.get("/",  getRentals)

export default router