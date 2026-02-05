import { Navbar } from "./components/Navbar"
import './App.css'
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import { SpecialMenu } from "./components/SpecialMenu"

export const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  )
}