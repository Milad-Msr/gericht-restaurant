import { AboutUs } from "./components/constants/AboutUs"
import { Hero } from "./components/constants/Hero"
import { Navbar } from "./components/constants/Navbar"
import { Special } from "./components/constants/Special"

export const App = () => {
  
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <Special />
    </div>
  )
}