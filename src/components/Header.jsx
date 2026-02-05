import { images } from "../constants"
import { SubHeading } from "./SubHeading"
import "./Header.css";

export const Header = () => {

  return (
    <div className="app__header app__wrapper section__padding" id="home">

      <div className="app__wrapper_info">
        <SubHeading title="Chase the New Flavour"/>
        <h1 className="app__header-h1">The Key to Find Dining</h1>
        <p className="p__opensans" style={{margin: "2rem 0"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit facilis culpa dolorem 
          similique vero ratione blanditiis. Ullam laboriosam ab illum voluptatem voluptatum dolorem Id suscipit
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header image" className=""/>
      </div>

    </div>
  )
}