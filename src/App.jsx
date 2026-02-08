import './App.css'
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import { SpecialMenu } from "./components/SpecialMenu"
import { Chef } from "./components/Chef"
import { Intro } from './components/Intro'
import { Laurels } from './components/Laurels'
import { Gallery } from './components/Gallery'
import { FindUs } from './components/FindUs'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro /> 
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}