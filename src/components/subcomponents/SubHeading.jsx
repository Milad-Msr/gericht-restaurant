import { images } from "../../data/images"

export const SubHeading = ({ title }) => {

  return (
    <div className="mb-7 2xl:mb-15">
      <p className="tracking-wide mb-2 text-white font-bold font-cormorant text-[20px] 2xl:text-2xl">{title}</p>
      <img src={images.spoon} alt="spoon" className="w-13"/>
    </div>
  )
}