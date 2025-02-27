import Image from "./Image"

function Comment() {
  return (
    <section className='p-4 bg-slate-50 rounded-xl mb-1'>
      <section className='flex items-center gap-4'>
        <Image
          src='userImg.jpeg'
          className='w-10 h-10 rounded-full object-cover'
          w={40}
        />
        <span className='font-medium'>Jonh Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </section>

      <section className='mt-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem
          deleniti reprehenderit sed eaque cupiditate corporis consectetur eius
          velit odit, facilis libero porro magni dignissimos, nesciunt in!
          Quibusdam, tenetur totam.
        </p>
      </section>
    </section>
  )
}

export default Comment
