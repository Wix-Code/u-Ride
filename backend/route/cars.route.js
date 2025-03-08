import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { deleteCar, getCar, getCars, postCars, updateCar } from "../controller/cars.controller.js"

const router = express.Router()

router.post("/", verifyToken, postCars)
router.get("/", getCars)
router.get("/:id", getCar)
router.put("/:id", verifyToken, updateCar)
router.delete("/:id", verifyToken, deleteCar)

export default router