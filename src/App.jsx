import { Navbar } from "./components/constants/Navbar"
import { Hero } from "./components/constants/Hero"
import { AboutUs } from "./components/constants/AboutUs"
import { Special } from "./components/constants/Special"
import { Chef } from "./components/constants/Chef"
import { Video } from "./components/constants/Video"
import { Awards } from "./components/constants/Awards"
import { Gallery } from "./components/constants/Gallery"


export const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Special />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
    </div>
  )
}