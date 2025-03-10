import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { calculatePrice, deleteCar, getCar, getCars, getRentals, postCars, processPayment, updateCar } from "../controller/cars.controller.js"

const router = express.Router()

router.post("/", verifyToken, postCars)
router.get("/", getCars)
router.get("/:id", getCar)
router.put("/:id", verifyToken, updateCar)
router.delete("/:id", verifyToken, deleteCar)
router.post("/calculate", verifyToken, calculatePrice)
router.get("/rents", getRentals)
router.post("/process", verifyToken, processPayment)

export default router