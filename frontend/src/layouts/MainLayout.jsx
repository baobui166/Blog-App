import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function MainLayout() {
  return (
    <section className='px-4 md:px-8 lg:px-16 2xl:px-64'>
      <Navbar />
      <Outlet />
    </section>
  )
}

export default MainLayout
