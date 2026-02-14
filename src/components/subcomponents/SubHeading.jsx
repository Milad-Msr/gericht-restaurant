import { images } from "../../data/images"

export const SubHeading = ({ title }) => {

  return (
    <div className="mb-7 2xl:mb-15">
      <p className="tracking-wide text-white font-bold font-cormorant text-[18px] 2xl:text-2xl">{title}</p>
      <img src={images.spoon} alt="spoon" className="w-10"/>
    </div>
  )
}