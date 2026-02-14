import { images } from "../../data/images"
import { Button } from "../subcomponents/Button"

export const AboutUs = () => {


  return (
    <div className="flex-center background py-15 px-6 flex-col lg:flex-row lg:justify-between relative">

      <img src={images.G} alt="g letter" className="absolute w-80 z-0 opacity-80 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>

      <div className="md:w-2/3 lg:flex lg:justify-end lg:items-end flex-col lg:text-right z-20">
        <h1 className="text-golden text-5xl font-bold font-cormorant md:text-6xl">About Us</h1>

        <img src={images.spoon} alt="spoon"/>

        <p className="text-white/80 py-7 md:text-[19px] 2xl:w-150">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quis pharetra adipiscing ultrices vulputate posuere tristique. 
          In sed odio nec aliquet eu proin mauris et.
        </p>

        <Button title="Explore More"/>
      </div>

      <div className="relative flex-center py-20 w-full lg:w-80">
        <img src={images.knife} alt="knife" className="w-25 z-10 2xl:w-27"/>
      </div>

      <div className="md:w-2/3 z-20">
        <h1 className="text-golden text-5xl font-bold font-cormorant md:text-6xl">Our History</h1>

        <img src={images.spoon} alt="spoon"/>

        <p className="text-white/80 py-7 md:text-[19px] 2xl:w-150">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quis pharetra adipiscing ultrices vulputate posuere tristique. 
          In sed odio nec aliquet eu proin mauris et.
        </p>
        
        <Button title="Explore More"/>
      </div>

    </div>
  )
}