import mongoose, { Schema } from "mongoose"

const tokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  token: { type: String, required: true },
  createAt: { type: Date, default: Date.now, expires: 30 * 8600 }
})

export default mongoose.model("Token", tokenSchema)
