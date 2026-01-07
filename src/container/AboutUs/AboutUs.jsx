import images from "../../constants/images"
import './AboutUs.css';



export const AboutUs = () => {

  
  return (
    <div id="about" className="app__aboutus app__bg flex__center section__padding">

      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img"/>
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In odit harum recusandae 
            repudiandae! Nihil, adipisci quis! Totam rem dolorem numquam culpa necessitatibus.
          </p>
          <button className="custom__button">Know More</button>
        </div>


        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife img" />
        </div>


        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img"/>
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In odit harum recusandae 
            repudiandae! Nihil, adipisci quis! Totam rem dolorem numquam culpa necessitatibus.
          </p>
          <button className="custom__button">Know More</button>
        </div>

      </div>
    </div>
  )
}

