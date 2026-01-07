import "./App.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Header } from "./container/Header/Header"
import { AboutUs } from "./container/AboutUs/AboutUs"
import { SpecialMenu } from "./container/Menu/SpecialMenu"

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