import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { getCar, getCars, postCars } from "../controller/cars.controller.js"

const router = express.Router()

router.post("/", verifyToken, postCars)
router.get("/", getCars)
router.get("/:id", getCar)

export default router