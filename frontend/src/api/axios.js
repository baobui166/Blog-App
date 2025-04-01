import axios from "axios"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})

const handelRefreshToken = async () => {
  try {
    const refreshToken = Cookies.get("refresh_token_blogapp") || ""
    const res = await apiService.post("/refresh-token", {
      token: refreshToken
    })

    return res.data
  } catch (err) {
    console.log(err)
  }
}

api.interceptors.request.use(
  async (config) => {
    let currentDate = new Date()
    const userId = JSON.parse(localStorage.getItem("userIdBLogApp"))
    const userCurrent = apiService.user.getUser(userId)

    if (!userCurrent) {
      throw new Error("Can't get User Current!!!")
    }

    const decodedToken = jwtDecode(userCurrent.accessToken)
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await handelRefreshToken()
      config.headers["authorization"] = "Bearer " + data.accessToken
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor - Kiểm tra token hết hạn và cập nhật
api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const { response, config } = error
    if (response && response.status === 401 && !config._retry) {
      config._retry = true
      try {
        // Gửi request làm mới accessToken
        const refreshToken = Cookies.get("refresh_token")
        if (!refreshToken) throw new Error("No refresh token available")

        const { accessToken } = await axios
          .post(`${import.meta.env.VITE_API_URL}/refresh-token`, {
            refreshToken
          })
          .then((res) => res.data)

        // Cập nhật accessToken mới
        Cookies.set("access_token", accessToken, { expires: 1 / 24 })
        api.defaults.headers.Authorization = `Bearer ${accessToken}`

        // Gửi lại request cũ với token mới
        config.headers.Authorization = `Bearer ${accessToken}`
        return axios(config)
      } catch (error) {
        console.error("Refresh token expired, logging out...")
        Cookies.remove("access_token")
        Cookies.remove("refresh_token")
        window.location.href = "/login"
        throw new Error(error)
      }
    }
    return Promise.reject(error)
  }
)

// API methods
export const apiService = {
  auth: {
    login: (credentials) => api.post("/auth/sign-in", credentials),
    register: (userData) => api.post("/auth/sign-up", userData),
    logout: () => api.post("/auth/logout")
  },
  user: {
    getUser: (id) => api.get(`/users/${id}`),
    updateProfile: (data) => api.put("/users", data)
  },
  get: (url, config) => api.get(url, config),
  post: (url, data, config) => api.post(url, data, config),
  put: (url, data, config) => api.put(url, data, config),
  patch: (url, data, config) => api.patch(url, data, config),
  delete: (url, config) => api.delete(url, config)
}

export default api
