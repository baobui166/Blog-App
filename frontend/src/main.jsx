import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import HomePage from "./routes/HomePage.jsx"
import LoginPage from "./routes/LoginPage.jsx"
import PostListPage from "./routes/PostListPage.jsx"
import RegisterPage from "./routes/RegisterPage.jsx"
import WritePage from "./routes/WritePage.jsx"
import SinglePostPage from "./routes/SinglePostPage.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import { ClerkProvider } from "@clerk/clerk-react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import { UserProvider } from "./context/contextUser.jsx"

const queryClient = new QueryClient()

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/:slug", element: <SinglePostPage /> },
      { path: "/write", element: <WritePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer position='top-right' />
        </QueryClientProvider>
      </ClerkProvider>
    </UserProvider>
  </StrictMode>
)
