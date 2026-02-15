import { cocktails, wines } from "../../data/data"
import { images } from "../../data/images"
import { Button } from "../subcomponents/Button"

export const Special = () => {

  return (
    <div className="w-full min-h-screen bg-blackmain px-8 py-15 md:px-15 flex flex-col items-center justify-center">

      <div className="header flex items-center justify-center text-center flex-col">
        <p className="font-cormorant text-[20px] text-white mb-3 tracking-wider md:text-[25px]">Menu that fits your palatte</p>
        <img src={images.spoon} alt="spoon" className="w-12 mb-3 md:w-15"/>
        <h1 className="text-golden font-bold text-[45px] font-cormorant mb-20 tracking-wider md:text-[70px]">Today's Special</h1>
      </div>

      <div className="menu w-full xl:flex items-center justify-center">

        <div className="wine w-full">
          <h2 className="text-center text-white text-4xl font-cormorant mb-8 tracking-widest md:text-5xl">Wine & Beer</h2>
          {wines.map(wine => <div className="menu-item flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex-[1_1]"><p className="text-golden font-cormorant text-[22px] tracking-wider font-bold  md:text-[26px] xl:text-[28px]">{wine.title}</p></div>
              <div className="w-24 h-px bg-golden mx-4"></div>
              <div className="flex items-end justify-end"><p className="text-grey font-bold md:text-[20px]">{wine.price}</p></div>
            </div>
            <div className="mb-9 xl:mb-15"><p className="text-grey text-[15px] md:text-[17px]">{wine.tags}</p></div>
          </div>)}
        </div>

        <div className="my-20 flex-center md:my-14 xl:px-10 w-full">
          <img src={images.menu} alt="menu" className="md:w-130 xl:w-100"/>
        </div>

        <div className="wine w-full">
          <h2 className="text-center text-white text-4xl font-cormorant mb-8 tracking-widest md:text-5xl">Cocktails</h2>
          {cocktails.map(wine => <div className="menu-item flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex-[1_1]"><p className="text-golden font-cormorant text-[22px] tracking-wider font-bold  md:text-[26px] xl:text-[28px]">{wine.title}</p></div>
              <div className="w-24 h-px bg-golden mx-4"></div>
              <div className="flex items-end justify-end"><p className="text-grey font-bold md:text-[20px]">{wine.price}</p></div>
            </div>
            <div className="mb-9 xl:mb-15"><p className="text-grey text-[15px] md:text-[17px]">{wine.tags}</p></div>
          </div>)}
        </div>

      </div>

      <Button title="View More"/>
    </div>
  )
}