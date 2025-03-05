import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js"

export const authorize = async (req, res, next) => {
  try {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]
    }

    if (!token) return req.status(401).json({ message: "Unauthorized" })
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await userModels.findById(decoded.userId)
    if (!user) return req.status(401).json({ message: "Unauthorized" })

    req.user = user

    next()
  } catch (error) {
    res.status(404).json({ message: "Unanuthorized", error: error.message })
  }
}

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Insufficient permissions."
      })
    }
    next()
  }
}
