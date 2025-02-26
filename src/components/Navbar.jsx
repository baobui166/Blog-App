import { useState } from "react"
import Image from "./Image"
import { Link } from "react-router-dom"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <Link
        to='/'
        className='flex gap-4 items-center md:text-2xl text-xl font-semibold'
      >
        <Image src='logo.png' alt='Lama Logo' w={32} h={32} />
        <span>BaoBuiBlog</span>
      </Link>
      {/* MENU MOBILE */}
      <section className='md:hidden'>
        <section
          className='cursor-pointer md:text-4xl text-xl text-black'
          onClick={() => setOpen((pre) => !pre)}
        >
          {open ? "X" : "☰"}
        </section>
        {/* MOBILE LINK LIST   */}
        <section
          className={`w-full h-screen flex flex-col items-center justify-center absolute  transition-all ease-in-out bg-[#e6e6ff] gap-8 font-medium text-xl ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to='/'>Home</Link>
          <Link to='/'>Trending</Link>
          <Link to=''>Most Popular</Link>
          <Link to=''>About</Link>
          <SignedOut>
            <Link to='/login'>
              <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>
                Login 👈
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </section>
      </section>
      {/* MENU DESKTOP */}
      <sectio className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/'>Trending</Link>
        <Link to=''>Most Popular</Link>
        <Link to=''>About</Link>
        <SignedOut>
          <Link to='/login'>
            <button className='py-2 px-4 rounded-3xl bg-blue-400 text-white'>
              Login 👈
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </sectio>
    </div>
  )
}
