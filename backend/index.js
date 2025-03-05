import "dotenv/config"
import express from "express"
import { CLIENT_URL, PORT } from "./config/env.js"
import connectDB from "./lib/connectDB.js"
import authRouter from "./routes/auth.routes.js"
import commentRouter from "./routes/comment.routes.js"
import postRouter from "./routes/post.routes.js"
import userRouter from "./routes/user.routes.js"
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors(CLIENT_URL))
app.use("/users", userRouter)
app.use("/auth", authRouter)
app.use("/comments", commentRouter)
app.use("/posts", postRouter)

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack
  })
})

app.listen(PORT, () => {
  connectDB()
  console.log("Server is running")
})
