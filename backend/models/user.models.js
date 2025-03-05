import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: 6
    },
    image: { type: String },
    savedPosts: { type: [String], default: [] },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user" // Default role is "user"
    }
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)
