import { awards } from "../../data/data"
import { images } from "../../data/images"
import { SubHeading } from "../subcomponents/SubHeading"

export const Awards = () => {


  return (
    <div className="min-h-screen w-full background py-15 px-8 md:px-15 xl:py-40 xl:px-25">
      <div className="container mt-10 xl:flex ">
        <div className="flex flex-col xl:flex-1 2xl:pl-20">
          <SubHeading title="Awards & Recognition"/>
          <h1 className="text-golden font-cormorant font-bold text-5xl mb-10 xl:mb-30 xl:text-7xl">Our Laurels</h1>
          {awards.map(item => <div className="flex gap-3 mb-10">
            <img src={item.imgUrl} alt={item.title} className="w-15 h-15"/>
            <div>
              <p className="text-golden font-cormorant font-bold text-[20px] mb-1 md:text-[25px]">{item.title}</p>
              <p className="text-white font-opensans text-[13px] md:text-[16px]">{item.subtitle}</p>
            </div>
          </div>)}
        </div>

        <div className="flex-center mt-20 xl:mt-0 xl:flex-1 flex justify-end">
          <img src={images.laurels} alt="laurels" className="xl:w-150"/>
        </div>

      </div>
    </div>
  )
}