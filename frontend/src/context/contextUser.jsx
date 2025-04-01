import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"
import { apiService } from "../api/axios"

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})
  const [token, setToken] = useState(Cookies.get("access_token_blogapp") || "")
  const [refreshToken, setRefreshToken] = useState(
    Cookies.get("refresh_token_blogapp") || ""
  )

  useEffect(() => {
    if (token) {
      Cookies.set("access_token_blogapp", token, {
        secure: true,
        sameSite: "Strict"
      })
    }
  }, [token])

  useEffect(() => {
    if (refreshToken) {
      Cookies.set("refresh_token_blogapp", refreshToken, {
        secure: true, //Chỉ gửi cookie qua HTTPS
        sameSite: "Strict" // Chặn cookie khi trang web được mở từ trang khác
      })
    }
  }, [refreshToken])

  const login = async (credentials) => {
    try {
      const response = await apiService.auth.login(credentials)

      setToken(response.data.accessToken)
      setRefreshToken(response.data.refreshToken)
      localStorage.setItem("userIdBLogApp", JSON.stringify(response.data.user))

      setUser(response.data.user)

      return response.data
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  const register = async (credentials) => {
    try {
      const response = await apiService.auth.register(credentials)

      return response.data // Trả về dữ liệu nếu request thành công
    } catch (error) {
      console.error("Login error:", error)
      throw error // Ném lỗi để React Query kích hoạt onError
    }
  }

  const logout = () => {
    setUser(null)
    setToken("")
    setRefreshToken("")
    Cookies.remove("access_token_blogapp")
    Cookies.remove("refresh_token_blogapp")
    window.location.href = "/login"
  }

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        refreshToken,
        setToken,
        setRefreshToken,
        login,
        logout,
        register
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error("useUser must be used within a UserProvider")
  return context
}

export { UserProvider, useUser }
