import express from "express"
import  authRoute  from "./route/auth.route.js"
import  rentalRoute  from "./route/rental.route.js"

const app = express()
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/rent", rentalRoute)

app.get("/", (req, res) => {
  res.send("Hello, World!")
})
app.listen(5000, () => {
  console.log("Server is running on port 5000")
})