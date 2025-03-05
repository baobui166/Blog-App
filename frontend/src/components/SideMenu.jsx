import { Link } from "react-router-dom"
import Search from "./Search"

function SideMenu() {
  return (
    <section className='flex flex-col px-4 sticky h-max top-8'>
      <h1 className='mb-4 text-sm font-medium'>Search</h1>
      <Search />
      <h1 className='mt-8 mb-4 text-sm font-medium'>Filter</h1>
      <section className='flex flex-col gap-2 text-sm'>
        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='newest'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
          />
          Newest
        </label>

        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='popular'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
          />
          Most Popular
        </label>

        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='trending'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
          />
          Trending
        </label>

        <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
          <input
            type='radio'
            name='sort'
            value='oldest'
            className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800'
          />
          Oldest
        </label>
      </section>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Category</h1>
      <section className='flex flex-col gap-2 text-sm'>
        <Link className='underline' to='/post'>
          All
        </Link>
        <Link className='underline' to='/post?cat=web-design'>
          Web Design
        </Link>
        <Link className='underline' to='/post?cat=development'>
          Development
        </Link>
        <Link className='underline?cat=database' to='/post'>
          Database
        </Link>
        <Link className='underline' to='/post?cat=se'>
          Search Engine
        </Link>
        <Link className='underline' to='/post?cat=marketing'>
          Marketing
        </Link>
      </section>
    </section>
  )
}

export default SideMenu
