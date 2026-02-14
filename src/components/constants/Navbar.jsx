import { useState } from "react"
import { CgMenuRight } from "react-icons/cg"
import { MdRestaurantMenu } from "react-icons/md"

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full flex justify-between items-center py-4 px-5 xl:px-10 bg-blackmain">

      <div className="flex flex-1">
        <a href="#" className="text-5xl font-vibe tracking-widest text-golden xl:text-6xl">Gericht</a>
      </div>

      <ul className="hidden flex-2 items-center justify-center gap-14 xl:flex">
        <li><a href="#home" className="nav-links">Home</a></li>
        <li><a href="#menu" className="nav-links">Menu</a></li>
        <li><a href="#awards" className="nav-links">Awards</a></li>
        <li><a href="about" className="nav-links">About</a></li>
        <li><a href="contact" className="nav-links">contact</a></li>
      </ul>

      <div className="hidden flex-1 justify-end items-center gap-5 lg:flex">
        <a href="#" className="nav-links">Login</a>
        <div className="w-0.5 h-6 rounded-2xl bg-grey"/>
        <a href="#" className="nav-links">Book a Table</a>
      </div>

      <div className="relative">
        
        <CgMenuRight size={35} onClick={() => setToggleMenu(true)} 
        className="text-golden cursor-pointer ml-10 xl:hidden"/>

        <div className={`menu-smallscreen ${toggleMenu ? "translate-x-0" : "-translate-x-full"}`}>

          <MdRestaurantMenu size={30} onClick={() => setToggleMenu(false)} 
          className="cursor-pointer text-golden absolute top-10 right-10"/>

          <a href="#" className="text-6xl font-vibe tracking-widest pt-25 text-golden">Gericht</a>

          <ul className="flex-center flex-col gap-4 mt-15">
            <li><a href="#home" className="nav-links">Home</a></li>
            <li><a href="#menu" className="nav-links">Menu</a></li>
            <li><a href="#awards" className="nav-links">Awards</a></li>
            <li><a href="about" className="nav-links">About</a></li>
            <li><a href="contact" className="nav-links">contact</a></li>
          </ul>

          <div className="flex-center gap-10 pt-13 lg:hidden">
            <a href="#" className="nav-links">Login</a>
            <div className="w-0.5 h-8 rounded-4xl bg-grey" />
            <a href="#" className="nav-links">Book a Table</a>
          </div>

        </div>
        
      </div>

    </div>
  )
}