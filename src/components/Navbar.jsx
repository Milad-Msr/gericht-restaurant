import { useState } from "react";
import images from "../constants/images"
import {  GiHamburgerMenu } from "react-icons/gi";
import {  MdOutlineRestaurantMenu } from "react-icons/md";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full bg-neutral-500 flex items-center justify-between px-20 py-3">

      <div className="flex-1 flex justify-start">
        <img src={images.gericht} alt="Gericht" className="w-50"/>
      </div>

      <ul className="flex font-alt items-center justify-center flex-3  max-xl:hidden">
        <li><a href="#home" className="nav-items">Home</a></li>
        <li><a href="#about" className="nav-items">About</a></li>
        <li><a href="#menu" className="nav-items">Menu</a></li>
        <li><a href="#awards" className="nav-items">Awards</a></li>
        <li><a href="#contact" className="nav-items">Contact</a></li>
      </ul>

      <div className="flex-1 flex items-center justify-end max-xl:mr-5">
        <a href="#login" className="font-alt nav-items">Login / Register</a>
      </div>




      <div className="hidden max-xl:flex items-center justify-center">
        <GiHamburgerMenu color="#fff" size={30} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className={`absolute top-0 left-0 bg-neutral-700 -translate-x-full w-full h-screen ${toggleMenu && "translate-x-0"} flex items-center justify-center`}>
            <MdOutlineRestaurantMenu color="#fff" size={50} onClick={() => setToggleMenu(false)} className="absolute top-10 right-10 border p-2 rounded-full"/>

            <ul className="">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>

    </nav>
  );
};