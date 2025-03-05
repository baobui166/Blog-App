import mongoose, { Schema } from "mongoose"

const commentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Posts", required: true },
    desc: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model("Comments", commentSchema)
