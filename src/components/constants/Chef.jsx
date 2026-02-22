import { images } from "../../data/images"
import { SubHeading } from "../subcomponents/SubHeading"

export const Chef = () => {


  return (
    <div className="background w-full min-h-screen px-8 py-20 md:px-15 lg:flex justify-between items-center lg:gap-50">

    <div className=" flex justify-center items-center flex-1">
      <img src={images.chef} alt="chef" className="2xl:w-160"/>
    </div>

    <div className="mt-20 lg:mt-0 flex  flex-col flex-1">
      <SubHeading title="Chef's Word"/>
      <h1 className="text-golden text-6xl tracking-wider font-cormorant font-bold mb-20 ">What We Believe In</h1>

      <div className="flex mb-1 font-sans items-end">
        <img src={images.quote} alt="quote" className="w-10 h-10 mr-3"/>
        <p className="text-white font-opensans text-[13px] md:text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      </div>

      <div className="mb-9 font-opensans text-[13px] md:text-[17px]">
        <p className="text-white">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie 
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="mb-10">
        <p className="text-golden font-cormorant text-4xl">Kevin Luo</p>
        <p className="text-white">Chef & Founder</p>
      </div>

      <div>
        <img src={images.sign} alt="sign" className="w-55"/>
      </div>
    </div>

    </div>
  )
}