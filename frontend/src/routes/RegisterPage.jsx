import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useUser } from "../context/contextUser"
import { useState } from "react"

function RegisterPage() {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { register } = useUser()

  const mutation = useMutation({
    mutationFn: async (credential) => await register(credential),
    onSuccess: () => {
      toast.success("Register successfully!!!")
      navigate("/login")
    },
    onError: (error) => {
      if (error.response) {
        setError(
          error.response.data?.message || "Register failed. Please try again."
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
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    }

    mutation.mutate(data)
  }
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <form
        onSubmit={handleSubmit}
        className='w-[500px] m-0 bg-white flex flex-col rounded-md p-5'
      >
        <h1 className='font-semibold text-xl text-center md:text-2xl my-2'>
          Sign Up
        </h1>

        <span className='text-red-800 text-center'>{error}</span>
        <label className='self-start font-bold'>User Name</label>
        <input
          type='text'
          name='username'
          className='w-full  outline-none border border-gray-200 p-2 rounded-md'
        />

        <label className='self-start font-bold mt-5'>Email</label>
        <input
          type='text'
          name='email'
          className='w-full outline-none border border-gray-200 p-2 rounded-md'
        />

        <label className='self-start font-bold mt-5'>Password</label>
        <input
          type='text'
          name='password'
          className='w-full  outline-none border border-gray-200 p-2 rounded-md'
        />

        <button className='px-4 py-2 bg-blue-600 w-max rounded-md text-white mt-5 self-center'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
