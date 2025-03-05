import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function WritePage() {
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      //let token
      // return axios.post("/posts", newPost, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost)
    },
    onSuccess: (res) => {
      toast.success("Post has been created!")
      navigate(`/${res.data.slugs}`)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      userId: "67c6f4be581925394b4fb395",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: content
    }

    console.log(data)

    mutation.mutate(data)
  }

  return (
    <section className='md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        className=' flex flex-col gap-6 flex-1 mb-6'
      >
        <button className='w-max p-2 shadow-md rounded-md text-sm text-gray-500'>
          Add a cover image
        </button>
        <input
          className='text-4xl font-semibold bg-transparent outline-none'
          type='text'
          placeholder='My Aewsome Story'
          name='title'
        />
        <section className='flex items-center gap-4'>
          <label className='text-sm'>Choose a category</label>
          <select
            name='category'
            id=''
            className='p-2 rounded-xl bg-white shadow-md'
          >
            <option value='general'>General</option>
            <option value='web-design'>Web Design</option>
            <option value='development'>Development</option>
            <option value='databases'>Databases</option>
            <option value='seo'>Search Engines</option>
            <option value='marketing'>Marketing</option>
          </select>
        </section>
        <textarea
          className='p-4 rounded-xl bg-white shadow-md'
          name='desc'
          placeholder='A Short Description'
        />
        <ReactQuill
          theme='snow'
          value={content}
          onChange={setContent}
          className='flex-1 rounded-xl bg-white shadow-md'
        />
        <button
          disabled={mutation.isPending}
          className='bg-blue-800 text-white font-medium mt-4 p-2 w-36 rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed'
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.error && <span></span>}
      </form>
    </section>
  )
}

export default WritePage
