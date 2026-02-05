import "./SpecialMenu.css";
import {images, data} from "../constants"
import { SubHeading } from "./SubHeading";
import { MenuItem } from "./MenuItem";


export const SpecialMenu = () => {

  return (
    <div className="app__specialMenu flex_center section__padding" id="menu">

      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits You Platte"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((item, index) => (
              <MenuItem key={index} title={item.title} tags={item.tags} price={item.price}/>
            ) )}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img"/>
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((item, index) => (
              <MenuItem key={index} title={item.title} tags={item.tags} price={item.price}/>
            ) )}
          </div>
        </div>

      </div>

      <div style={{marginTop: "15px"}}>
        <button className="custom__button">View More</button>
      </div>

    </div>
  )
}