import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-blackbg">

      <div className="flex flex-1 items-center justify-start">
        <img src={images.gericht} alt="gericht logo" className="w-55 cursor-pointer max-sm:w-40"/>
      </div>

      <ul className="center flex-2 gap-15 max-xl:hidden">
        <li className="open-sans nav-hover"> <a href="#home">Home</a> </li>
        <li className="open-sans nav-hover"> <a href="#about">About</a> </li>
        <li className="open-sans nav-hover"> <a href="#menu">Menu</a> </li>
        <li className="open-sans nav-hover"> <a href="#awards">Awards</a> </li>
        <li className="open-sans nav-hover"> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="flex flex-1 items-center justify-end gap-4 max-md:hidden max-xl:mr-10">
        <a href="#login" className="open-sans nav-hover">Login / Register</a>
        <div className="w-0.5 h-6 rounded-2xl bg-grey"/>
        <a href="/" className="open-sans nav-hover">Book a Table</a>
      </div>


      <div className="hidden max-xl:flex">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={ () => setToggleMenu(true) }/>

        {toggleMenu && (
          <div className="w-full h-screen center flex-col fixed top-0 left-0 z-10 bg-blackbg">

            <MdOutlineRestaurantMenu 
              className="absolute top-7 right-7 text-[27px] cursor-pointer text-golden" 
              onClick={ () => setToggleMenu(false) }
            />

            <div className="flex items-center justify-start mb-20">
              <img src={images.gericht} alt="gericht logo" className="w-50 cursor-pointer"/>
            </div>

            <ul className="app__navbar-smallscreen-links flex center flex-col gap-9">
              <li className="open-sans nav-hover font-cormorant text-2xl"> <a href="#home">Home</a> </li>
              <li className="open-sans nav-hover font-cormorant text-2xl"> <a href="#about">About</a> </li>
              <li className="open-sans nav-hover font-cormorant text-2xl"> <a href="#menu">Menu</a> </li>
              <li className="open-sans nav-hover font-cormorant text-2xl"> <a href="#awards">Awards</a> </li>
              <li className="open-sans nav-hover font-cormorant text-2xl"> <a href="#contact">Contact</a> </li>
            </ul>

          </div>
        )}

      </div>
    </nav>
  )
}