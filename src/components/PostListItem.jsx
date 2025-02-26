import { Link } from "react-router-dom"
import Image from "./Image"

function PostListItem() {
  return (
    <section className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <section className='md:hidden xl:block xl:w-1/3'>
        <Image src='postImg.jpeg' className='rounded-2xl object-cover' />
      </section>
      {/* detail */}
      <section className='flex flex-col gap-4 xl:w-2/3'>
        <Link to='/test' className='text-4xls font-semibold'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
        </Link>
        <section className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Written by</span>
          <Link className='text-blue-800'>Jonh ne</Link>
          <span>on</span>
          <Link className='text-blue-800'>Web Design</Link>
          <span>2 days ago</span>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          unde numquam maiores quasi, amet possimus dignissimos. Repellat
          veritatis officia pariatur provident dolorem quia sunt mollitia quidem
          ex? Velit, dolorum ipsum?
        </p>
        <Link to='/test' className='underline text-blue-800'>
          Read more
        </Link>
      </section>
    </section>
  )
}

export default PostListItem
