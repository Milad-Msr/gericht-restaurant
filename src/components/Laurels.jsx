import "./Laurels.css";
import { images, data } from "../constants"
import { SubHeading } from "./SubHeading";



export const Laurels = () => {

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition"/>
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map(award => (
            <div key={award.title} className="app__laurels__awards">
              <div className="app__laurels__awards-card">
                <img src={award.imgUrl} alt="awards"/>
                <div className="app__laurels__awards-card_content">
                  <p className="p__cormorant" style={{color: "#dcca87"}}>{award.title}</p>
                  <p className="p__cormorant">{award.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels"/>
      </div>

    </div>
  )
}


