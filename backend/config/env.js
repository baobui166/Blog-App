import { config } from "dotenv"

config({ path: ".env" })

export const {
  MONGO_URI,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  JWT_ACCESS_TOKEN,
  JWT_REFRESH_TOKEN,
  PORT,
  CLIENT_URL,
  IK_URL_ENDPOINT,
  IK_PUBLIC_KEY,
  IK_PRIVATE_KEY
} = process.env
