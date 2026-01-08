import { SubHeading } from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import data from "../../constants/data";
import './SpecialMenu.css';
import { MenuItem } from "../../components/Menuitem/MenuItem";


export const SpecialMenu = () => {

  return (
    <div id="menu" className="app__specialMenu flex__center section__padding">

      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits Your Palatte"/>
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="img menu"/>
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">CockTails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop: "15px"}}>
        <button className="custom__button">View More</button>

      </div>
      
    </div>
  )
}
