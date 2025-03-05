import { config } from "dotenv"

config({ path: ".env" })

export const { MONGO_URI, JWT_EXPIRES_IN, JWT_SECRET, PORT, CLIENT_URL } =
  process.env
