import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

function SinglePostPage() {
  return (
    <section className='flex flex-col gap-8'>
      {/* detail */}
      <section className='flex justify-between'>
        <section className='lg:w-3/5 flex flex-col gap-8 font-semibold'>
          <h1 className='text-xl  md:text-3xl flex flex-col gap-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            voluptatum fugit deserunt quidem ipsam unde, laudantium pariatur
            voluptas consequatur optio repellendus natus sed vel voluptate ea,
            voluptates ab, error quaerat!
          </h1>
          <section className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Write by</span>
            <Link className='text-blue-800'>Jonh Doe</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </section>
          <p className='text-gray-500 font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            culpa dolorum et, voluptate earum repellat molestias, reiciendis
            exercitationem aliquam labore delectus aperiam? Repellendus non
            fugit placeat voluptates modi est excepturi.
          </p>
        </section>
        <section className='hidden lg:block w-2/5'>
          <Image src='postImg.jpeg' w={600} className='rounded-2xl' />
        </section>
      </section>
      {/* content */}
      <section className='flex flex-col md:flex-row gap-8'>
        {/* test */}
        <section className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusantium tempore ducimus, pariatur expedita aliquid autem quae
            qui itaque quam eveniet, dolorum praesentium corrupti numquam, iure
            quas tenetur culpa molestiae?
          </p>
        </section>
        {/* menu */}
        <section className='px-4 h-max sticky top-8'>
          <h1 className=' mb-4 text-sm font-medium'>Author</h1>
          <section className='flex flex-col gap-4'>
            <section className='flex items-center gap-8'>
              <Image
                src='userImg.jpeg'
                className='w-12 h-12 rounded-full object-cover'
                w={48}
                h={48}
              />
              <Link className='text-blue-800'>Jonh Doe</Link>
            </section>
            <p className='text-sm text-gray-500'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <div className='flex gap-2'>
              <Link>
                <Image src='facebook.svg' />
              </Link>
              <Link>
                <Image src='instagram.svg' />
              </Link>
            </div>
          </section>
          <PostMenuActions />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Caetegories</h1>
          <section className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>All</Link>
            <Link className='underline'>Web Design</Link>
            <Link className='underline'>Developer</Link>
            <Link className='underline'>Search Engines</Link>
            <Link className='underline'>Marketing</Link>
          </section>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </section>
      </section>

      <Comments />
    </section>
  )
}

export default SinglePostPage
