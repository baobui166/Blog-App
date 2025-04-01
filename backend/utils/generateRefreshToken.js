import jwt from "jsonwebtoken"
import { JWT_REFRESH_TOKEN } from "../config/env.js"

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, JWT_REFRESH_TOKEN)
}

export default generateRefreshToken
