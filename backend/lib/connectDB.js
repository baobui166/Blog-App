import mongoose from "mongoose"
import { MONGO_URI } from "../config/env.js"

if (!MONGO_URI) {
  throw new Error(
    "Please define the MongoDB_URL in enviroment variable inside .env"
  )
}

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Mongo is connected")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
