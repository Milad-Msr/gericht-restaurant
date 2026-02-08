import './App.css'
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import { SpecialMenu } from "./components/SpecialMenu"
import { Chef } from "./components/Chef"
import { Intro } from './components/Intro'
import { Laurels } from './components/Laurels'
import { Gallery } from './components/Gallery'

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
    </div>
  )
}