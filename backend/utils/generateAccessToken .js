import jwt from "jsonwebtoken"
import { JWT_ACCESS_TOKEN, JWT_EXPIRES_IN } from "../config/env.js"
const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, JWT_ACCESS_TOKEN, {
    expiresIn: JWT_EXPIRES_IN
  })
}

export default generateAccessToken
