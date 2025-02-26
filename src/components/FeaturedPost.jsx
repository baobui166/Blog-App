import { Link } from "react-router-dom"
import Image from "./Image.jsx"

function FeaturedPost() {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* first */}
      <section className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* image */}
        <Image src='featured1.jpeg' className='rounded-3xl object-cover' />
        {/* detail */}
        <section className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-blue-500'>2 Days ago</span>
        </section>
        {/* title */}
        <Link
          to='/test'
          className='text-xl lg:text-3xl font-semibold lg:font-bold'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </section>
      {/* others */}
      <section className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* second */}
        <section className='lg:h-1/3 flex justify-between gap-4 '>
          <Image
            src='featured2.jpeg'
            className='rounded-3xl object-cover aspect-video w-1/3'
          />
          {/* detail and des */}
          <section className='w-2/3 flex flex-col'>
            <section className='flex items-center gap-4 text-sm lg:text-basem mb-4'>
              <h1 className='font-semibold lg:text-lg'>02.</h1>
              <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
              <span className='text-gray-500 text-sm'>2 Days ago</span>
            </section>
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-sm font-medium'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </section>
        </section>
        {/* third */}
        <section className='lg:h-1/3 flex justify-between gap-4 '>
          <Image
            src='featured3.jpeg'
            className='rounded-3xl object-cover aspect-video w-1/3'
          />
          {/* detail and des */}
          <section className='w-2/3 flex flex-col'>
            <section className='flex items-center gap-4 text-sm lg:text-basem mb-4'>
              <h1 className='font-semibold lg:text-lg'>03.</h1>
              <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
              <span className='text-gray-500 text-sm'>2 Days ago</span>
            </section>
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-sm font-medium'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </section>
        </section>
        {/* fourth */}
        <section className='lg:h-1/3 flex justify-between gap-4 '>
          <Image
            src='featured4.jpeg'
            className='rounded-3xl object-cover aspect-video w-1/3'
          />
          {/* detail and des */}
          <section className='w-2/3 flex flex-col'>
            <section className='flex items-center gap-4 text-sm lg:text-basem mb-4'>
              <h1 className='font-semibold lg:text-lg'>04.</h1>
              <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
              <span className='text-gray-500 text-sm'>2 Days ago</span>
            </section>
            <Link
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-sm font-medium'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </section>
        </section>
      </section>
    </div>
  )
}

export default FeaturedPost
