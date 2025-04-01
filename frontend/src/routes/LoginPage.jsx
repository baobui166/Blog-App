import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useUser } from "../context/contextUser"
import { useState } from "react"

function LoginPage() {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login, user } = useUser()

  console.log("user loginpage:  ", user)

  const mutation = useMutation({
    mutationFn: async (credential) => await login(credential),
    onSuccess: () => {
      toast.success("Login successfully!!!")
      navigate("/")
    },
    onError: (error) => {
      if (error.response) {
        setError(
          error.response.data?.message || "Login failed. Please try again."
        )
      } else {
        setError("Server error. Please try again later.")
      }
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    console.log("data user login: ", data)

    mutation.mutate(data)
  }

  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <form
        onSubmit={handleSubmit}
        className='w-[500px] m-0 bg-white flex flex-col rounded-md p-5'
      >
        <h1 className='font-semibold text-xl text-center md:text-2xl my-2'>
          Login
        </h1>
        <span className='text-red-800 text-center'>{error}</span>
        <label htmlFor='' className='self-start font-bold'>
          Email
        </label>
        <input
          type='text'
          name='email'
          className='w-full outline-none border border-gray-200 p-2 rounded-md'
        />
        <label htmlFor='' className='self-start font-bold mt-5'>
          Password
        </label>
        <input
          type='password'
          name='password'
          className='w-full outline-none border border-gray-200 p-2 rounded-md'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 w-max rounded-md text-white mt-5 self-center'
        >
          Login
        </button>

        <span className='text-center text-sm mt-4'>
          Have a account?{" "}
          <Link to='/register' className='text-blue-800 underline'>
            Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default LoginPage
