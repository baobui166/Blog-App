import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js"
import userModels from "../models/user.models.js"

// request body is an object containing data from the client (POST request)
export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    //take data from request
    const { username, email, password, role } = req.body

    // check if user already exists
    const existingUser = await userModels.findOne({ email })
    const existingUserName = await userModels.findOne({ username })
    if (existingUser || username) {
      const error = new Error("User already exist")
      error.status = 400
      throw error
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password, salt)

    const newUser = await userModels.create([
      { username, email, password: hasedPassword, role }
    ])

    const token = jwt.sign({ userId: newUser[0].id, role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    })

    await session.commitTransaction()
    session.endSession()

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: { token, user: newUser[0] }
    })
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    next(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userModels.findOne({ email })
    if (!user) {
      const error = new Error("User not found")
      error.status = 404
      throw error
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      const error = new Error("Invalid password")
      error.status = 404
      throw error
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    })

    res.status(200).json({
      success: true,
      message: "User signed successfully",
      data: { token, user }
    })
  } catch (error) {
    next(error)
  }
}

export const signOut = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "User signed out successfully"
    })
  } catch (error) {
    next(error)
  }
}
