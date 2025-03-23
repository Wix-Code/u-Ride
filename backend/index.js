import express from "express"
import  authRoute  from "./route/auth.route.js"
import  rentalRoute  from "./route/rental.route.js"
import  bookRoute  from "./route/book.route.js"
import  carsRoute  from "./route/cars.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: /*ttp://localhost:5173",*/"https://u-ride-rust.vercel.app",
  credentials: true, // allow cookies to be sent over HTTP requests
}))

app.use("/api/auth", authRoute)
app.use("/api/rent", rentalRoute)
app.use("/api/book", bookRoute)
app.use("/api/cars", carsRoute)

app.get("/", (req, res) => {
  res.send("Hello, World!")
})
app.listen(5000, () => {
  console.log("Server is running on port 5000")
})