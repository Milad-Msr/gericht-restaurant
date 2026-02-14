import { images } from "../../data/images"
import { Button } from "../subcomponents/Button"
import { SubHeading } from "../subcomponents/SubHeading"

export const Hero = () => {

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-blackmain pb-15 pt-30 gap-12 px-7 md:px-15 xl:flex-row 2xl:px-30 2xl:pt-0">

      <div className="flex items-start flex-col -mt-20">

        <SubHeading title="Chase The New Flavour"/>

        <h1 className="text-6xl font-bold font-cormorant text-golden mb-10 md:text-[70px] lg:text-[90px] 2xl:text-8xl 2xl:mb-15">
          The Key To Fine Dining
        </h1>

        <p className="font-opensans mb-10 text-white/60">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat 
          morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>

        <Button title="Explore More"/>
      </div>

      <div className="flex xl:justify-end">
        <img src={images.welcome} alt="hero img" className="w-full xl:w-[75%] 2xl:w-[70%] "/>
      </div>

    </div>
  )
}