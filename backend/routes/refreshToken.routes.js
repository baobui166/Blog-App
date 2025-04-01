import { Router } from "express"
import jwt from "jsonwebtoken"
import verifyRefreshToken from "../utils/verifyRefreshToken.js"
import { JWT_ACCESS_TOKEN, JWT_EXPIRES_IN } from "../config/env.js"

const refreshRouter = Router()

// get new access token
refreshRouter.post("/", async (req, res) => {
  const refreshToken = req.body.token

  if (!refreshToken) {
    return res
      .status(400)
      .json({ error: true, message: "Refresh Token is required" })
  }

  try {
    const { tokenDetails } = await verifyRefreshToken(refreshToken)
    const payload = { _id: tokenDetails._id, roles: tokenDetails.roles }
    const accessToken = jwt.sign(payload, JWT_ACCESS_TOKEN, {
      expiresIn: JWT_EXPIRES_IN
    })

    return res.status(200).json({
      success: true,
      accessToken,
      message: "Access token created successfully"
    })
  } catch (err) {
    return res.status(400).json(err)
  }
})

export default refreshRouter
