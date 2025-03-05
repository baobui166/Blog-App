import mongoose, { Schema } from "mongoose"

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    img: { type: String },
    title: { type: String, required: true },
    slugs: { type: String, required: true, unique: true },
    desc: { type: String },
    category: { type: String, default: "general" },
    content: { type: String, required: true },
    isFeature: { type: Boolean, default: false },
    visit: { type: Number, default: 0 }
  },
  { timestamps: true }
)

export default mongoose.model("Posts", postSchema)
