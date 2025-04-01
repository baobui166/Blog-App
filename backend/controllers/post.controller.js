import ImageKit from "imagekit"
import postModels from "../models/post.models.js"
import userModels from "../models/user.models.js"
import {
  IK_URL_ENDPOINT,
  IK_PUBLIC_KEY,
  IK_PRIVATE_KEY
} from "../config/env.js"

export const getAllPost = async (req, res) => {
  const posts = await postModels.find()
  res.status(200).json(posts)
}

export const getPost = async (req, res) => {
  const post = await postModels.findOne({ slugs: req.params.slug })
  res.status(200).json(post)
}

export const createPost = async (req, res) => {
  const userId = req.body.userId
  const user = await userModels.findById(userId)
  if (!user) {
    return res.status(404).json({ message: "You are not login!!!" })
  }

  let slugs = req.body.title.replace(/ /g, "-").toLowerCase()

  let existingPost = await postModels.findOne({ slugs })
  let counter = 2

  while (existingPost) {
    slugs = `${slugs}-${counter}`
    existingPost = await postModels.findOne({ slugs })
    counter++
  }

  const newPost = new postModels({ user: userId, slugs, ...req.body })

  const post = await newPost.save()
  res.status(200).json(post)
}

export const deletePost = async (req, res) => {
  const post = await postModels.findById(req.params.id)

  if (!post) {
    return res.status.json({ message: "Post not found!!!" })
  }

  if (post.user.toString() !== req.user.id) {
    return res.status.json({
      message: "You are not authorized to delete  this post"
    })
  }

  await postModels.findByIdAndDelete(req.params.id)
  res.status(200).json("Post has been deleted")
}

const imagekit = new ImageKit({
  urlEndpoint: IK_URL_ENDPOINT,
  publicKey: IK_PUBLIC_KEY,
  privateKey: IK_PRIVATE_KEY
})

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters()
  res.send(result)
}
