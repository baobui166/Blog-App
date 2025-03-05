import { Webhook } from "svix"
import userModels from "../models/user.models.js"
import postModels from "../models/post.models.js"
import commentModels from "../models/comment.models.js"

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error("Wehook secret needed!")
  }

  const payload = req.body
  const headers = req.headers

  const wh = new Webhook(WEBHOOK_SECRET)
  let evt

  try {
    evt = wh.verify(payload, headers)
  } catch (error) {
    res.status(400).json({ message: "Webhook vertification failed!" })
  }

  //console.log(evt.data)

  if (evt.type === "user.created") {
    console.log(evt)
    const newUser = new userModels({
      clerkUserId: evt.data.id,
      username: evt.data.username || evt.data.email_addresses[0].email_address,
      email: evt.data.email_addresses[0].email_address,
      image: evt.data.profile_img_url
    })

    await newUser.save()
  }

  if (evt.type === "user.deleted") {
    const deletedUser = await User.findOneAndDelete({
      clerkUserId: evt.data.id
    })

    await postModels.deleteMany({ user: deletedUser._id })
    await commentModels.deleteMany({ user: deletedUser._id })
  }

  return res.status(200).json({
    message: "Webhook received"
  })
}
