import "./Chef.css";
import { images } from "../constants";
import { SubHeading } from "./SubHeading";

export const Chef = () => {


  return (
    <div className="app__bg app__wrapper section__padding">

      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef"/>
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className="headtext__cormorant">What we Belive in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote"/>
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <p className="p__opensans">
            Quas, itaque voluptatum vitae perferendis quibusdam eaque officia, 
            fugit dolor facilis, ipsa accusamus neque temporibus doloribus 
            rem voluptatem molestias illo omnis ea.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Lue</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign"/>
        </div>
        
      </div>
    </div>
  )
}