import { apiService } from "../api/axios"

export const getUser = async () => {
  const userId = JSON.parse(localStorage.getItem("userIdBLogApp"))
  const data = apiService.user.getUser(userId)
  return data
}
