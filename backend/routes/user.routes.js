import { Router } from "express"
import { getUser, getUsers } from "../controllers/user.controller.js"
import authRouter from "./auth.routes.js"

const userRouter = Router()

userRouter.get("/", getUsers)
userRouter.get("/:id", authRouter, getUser)
userRouter.post("/", (req, res) => {
  return res.send({ title: "Create  user" })
})

userRouter.put("/:id", (req, res) => {
  return res.send({ title: "Update user" })
})

userRouter.delete("/:id", (req, res) => {
  return res.send({ title: "Delete user" })
})

export default userRouter
