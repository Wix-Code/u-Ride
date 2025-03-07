import express from "express"
import { book } from "../controller/book.controller.js"

const router = express.Router()

router.post("/", book)

export default router