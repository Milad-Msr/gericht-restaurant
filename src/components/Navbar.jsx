import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";

export const Navbar = () => {

  return (
    <nav className="w-full flex justify-between items-center bg-blackbg py-4 px-8">

      <div className="flex justify-start items-center flex-1">
        <img src={images.gericht} alt="gericht logo" className="w-55"/>
      </div>

      <ul className="app__navbar-links flex-2 flex center gap-10">
        <li className="open-sans nav-hover"> <a href="#home">Home</a> </li>
        <li className="open-sans nav-hover"> <a href="#about">About</a> </li>
        <li className="open-sans nav-hover"> <a href="#menu">Menu</a> </li>
        <li className="open-sans nav-hover"> <a href="#awards">Awards</a> </li>
        <li className="open-sans nav-hover"> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="flex-1 flex justify-end items-center gap-4">
        <a href="#login" className="open-sans nav-hover">Login / Register</a>
        <div className="w-0.5 h-6 bg-grey rounded-2xl" />
        <a href="/" className="open-sans nav-hover">Book a Table</a>
      </div>

      <div className="smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={ () => {} } />
      </div>

    </nav>
  )
}