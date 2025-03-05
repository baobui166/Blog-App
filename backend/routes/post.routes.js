import express from "express"
import {
  createPost,
  deletePost,
  getAllPost,
  getPost
} from "../controllers/post.controller.js"
import { authorize, authorizeRoles } from "../middlewares/auth.middleware.js"

const postRouter = express.Router()

// postRouter.get("/", authorize, authorizeRoles("user", "admin"), getAllPost)
// postRouter.get("/:slug", authorize, authorizeRoles("user", "admin"), getPost)
// postRouter.post("/", authorize, authorizeRoles("admin"), createPost)
// postRouter.delete("/:id", authorize, authorizeRoles("admin"), deletePost)
postRouter.get("/", getAllPost)
postRouter.get("/:slug", getPost)
postRouter.post("/", createPost)
postRouter.delete("/:id", deletePost)

export default postRouter
