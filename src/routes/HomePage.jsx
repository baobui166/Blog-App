import { Link } from "react-router-dom"
import MainCategory from "../components/MainCategory"
import FeaturedPost from "../components/FeaturedPost"
import PostList from "../components/PostList"

function HomePage() {
  return (
    <section className='mt-4 flex flex-col gap-4'>
      {/* <BreakCrumd /> */}
      <section className='flex gap-4 items-center'>
        <Link to='/'>Home</Link>
        <span>•</span>
        <span className='text-blue-300'>BLogs and Articles</span>
      </section>
      {/* <Introdution /> */}
      <section className='flex items-center justify-between'>
        {/* title */}
        <section className=''>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
            architecto
          </p>
        </section>
        {/* animation button */}
        <Link to='/write' className=' hidden relative md:block'>
          <svg
            viewBox='0 0 200 200'
            width='200'
            height='200'
            // className="text-lg tracking-widest animate-spin animatedButton"
            className='text-lg tracking-widest animate-spin animatedButton'
          >
            <path
              id='circlePath'
              fill='none'
              d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
            />
            <text>
              <textPath href='#circlePath' startOffset='0%'>
                Write your story •
              </textPath>
              <textPath href='#circlePath' startOffset='50%'>
                Share your idea •
              </textPath>
            </text>
          </svg>

          <button className='absolute top-0 left-0 bottom-0 right-0 m-auto w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              fill='none'
              stroke='white'
              strokeWidth='2'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </button>
        </Link>
      </section>
      <MainCategory />
      {/* <FeaturePost /> */}
      <FeaturedPost />
      {/* <Post List /> */}
      <section>
        <h1 className='my-8 text-2xl text-gray-800 '>Recent Posts</h1>
        <PostList />
      </section>
    </section>
  )
}

export default HomePage
