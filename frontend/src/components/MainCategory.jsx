import { Link } from "react-router-dom"
import Search from "./Search"

function MainCategory() {
  return (
    <div className='hidden bg-white md:flex xl:rounded-full p-4 shadow-lg items-center justify-center gap-3'>
      {/* links */}
      <section className='flex items-center flex-1 justify-between flex-wrap'>
        <Link
          to='/posts'
          className='bg-blue-400 text-white rounded-full px-4 py-2'
        >
          All Post
        </Link>
        <Link
          to='/posts?cat=web-design'
          className='hover:bg-blue-50 text-black rounded-full px-4 py-2'
        >
          Web Design
        </Link>
        <Link
          to='/posts?cat=web-design'
          className='hover:bg-blue-50 text-black rounded-full px-4 py-2'
        >
          Development
        </Link>
        <Link
          to='/posts?cat=databases'
          className='hover:bg-blue-50 text-black rounded-full px-4 py-2'
        >
          Databases
        </Link>
        <Link
          to='/posts?cat=web-design'
          className='hover:bg-blue-50 text-black rounded-full px-4 py-2'
        >
          Search Engines
        </Link>
        <Link
          to='/posts?cat=web-design'
          className='hover:bg-blue-50 text-black rounded-full px-4 py-2'
        >
          Marketing
        </Link>
      </section>
      <span className='w-[3px] h-5 bg-black'></span>
      {/* search */}
      <Search />
    </div>
  )
}

export default MainCategory
