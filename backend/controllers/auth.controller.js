import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js"
import userModels from "../models/user.models.js"
import generateTokens from "../utils/generateAccessToken .js"
import generateAccessToken from "../utils/generateAccessToken .js"
import generateRefreshToken from "../utils/generateRefreshToken.js"
import tokenModels from "../models/token.models.js"

// request body is an object containing data from the client (POST request)
export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    //take data from request
    const { username, email, password, role } = req.body
    const user = { username, email, password, role }

    // check if username or email already exists
    const existingUser = await userModels.findOne({ email })
    if (existingUser) {
      const error = new Error("Email already exist")
      error.status = 400
      throw error
    }

    const existingUserName = await userModels.findOne({ username })
    if (existingUserName) {
      const error = new Error("Username already exist")
      error.status = 400
      throw error
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password, salt)

    await userModels.create([
      { username, email, password: hasedPassword, role }
    ])

    await session.commitTransaction()
    session.endSession()

    res.status(201).json({
      success: true,
      message: "User created successfully"
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

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.status(200).json({
      success: true,
      message: "Login successfully",
      data: { accessToken, refreshToken, userID: user._id }
    })
  } catch (error) {
    next(error)
  }
}

export const signOut = async (req, res, next) => {
  try {
    const { refreshToken } = req.body.token
    await tokenModels.findOneAndDelete({ token: refreshToken })
    res.status(200).json({
      success: true,
      message: "User signed out successfully"
    })
  } catch (error) {
    next(error)
  }
}
