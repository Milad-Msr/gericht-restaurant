import { useState } from "react";
import images from "../../constants/images";
import {  GiHamburgerMenu } from "react-icons/gi";
import {  MdOutlineRestaurantMenu } from "react-icons/md";


export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar w-full flex items-center justify-between bg-black1 py-4 px-8 max-sm:p-4">

      <div className="app__navbar-logo flex justify-start items-center">
        <img src={images.gericht} alt="Logo" className="w-40 max-sm:w-36"/>
      </div>

      <ul className="app__navbar-links flex-1 center max-xl:hidden">
        <li className="nav-items"> <a href="#home">Home</a> </li>
        <li className="nav-items"> <a href="#about">About</a> </li>
        <li className="nav-items"> <a href="#menu">Menu</a> </li>
        <li className="nav-items"> <a href="#awards">Awards</a> </li>
        <li className="nav-items"> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="app__navbar-login flex justify-end items-center max-sm:hidden">
        <a href="#login" className="nav-button">Login / Register</a>
        <div className="w-0.5 h-8 bg-gray"/>
        <a href="/" className="nav-button">Book a Table</a>
      </div>

        <div className="nav-smallScreen hidden max-xl:flex transition-all">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={ () => setToggleMenu(true) } />

      {toggleMenu && (
        <div className="overlay flex__center slide-bottom fixed top-0 left-0 w-full h-screen bg-black transition-all flex-col z-10 ">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close text-2xl text-golden cursor-pointer absolute top-5 right-5" onClick={ () => setToggleMenu(false) } />

          <ul className="app__navbar-links flex-1 center flex-col m-8 font-base text-center text-3xl text-golden ">
            <li className="nav-item hover:text-gray m-4"> <a href="#home">Home</a> </li>
            <li className="nav-item hover:text-gray m-4"> <a href="#about">About</a> </li>
            <li className="nav-item hover:text-gray m-4"> <a href="#menu">Menu</a> </li>
            <li className="nav-item hover:text-gray m-4"> <a href="#awards">Awards</a> </li>
            <li className="nav-item hover:text-gray m-4"> <a href="#contact">Contact</a> </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  )
}