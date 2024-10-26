import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoute.js"

// App configuration
const PORT = process.env.PORT || 5000
const app = express()

// Connect to database
await connectDB()

// Initialize middleware
app.use(express.json())
app.use(cors())

// Api Routes
app.get("/", (req, res) => res.send("Welcome to Full Stack BG Removal Website"))
app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)

app.listen(PORT, () => console.log("Server running on port " + PORT))