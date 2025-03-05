import { useState } from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"

function PostListPage() {
  const [open, setOpen] = useState(false)
  return (
    <section className=''>
      <h1>Developer Blog</h1>
      <button
        onClick={() => setOpen((pre) => !pre)}
        className='bg-blue-800 md:hidden text-sm text-white rounded-2xl p-2 my-4 '
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <section className='flex flex-col-reverse md:flex-row gap-8'>
        {/* Post list */}
        <section>
          <PostList />
        </section>
        {/* Menu */}
        <section className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </section>
      </section>
    </section>
  )
}

export default PostListPage
