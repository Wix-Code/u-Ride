import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { postCars } from "../controller/cars.controller.js"

const router = express.Router()

router.post("/", verifyToken, postCars)

export default router