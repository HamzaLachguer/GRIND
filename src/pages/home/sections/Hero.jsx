import React from 'react'
import WhiteButton from '../../../components/ui/buttons/WhiteButton'

const Hero = () => {
  return (
    <div
      className="relative px-5 md:px-8 lg:px-12 pb-[70px] lg:pb-8 h-[calc(100vh-80px)]"
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          className="h-full w-full object-center object-cover" 
          src="https://hips.hearstapps.com/hmg-prod/images/sweaty-black-athlete-doing-sit-ups-in-a-gym-royalty-free-image-1591197876.jpg?crop=1.00xw:1.00xh;0,0" 
          alt="" 
        />

        <div 
          className="bg-gradient-to-t from-[#00000090] to-transparent absolute size-full top-0 left-0" 
        />

        <div
          className="absolute top-0 left-0 size-full px-5 md:px-8 lg:px-12 pb-5 md:pb-8 lg:pb-12 flex flex-col justify-end gap-4"
        >
          <p 
            className="text-xs uppercase font-geist font-bold py-0.5 px-1.5 bg-white w-fit tracking-widest"
          >YEAR-END SALE</p>

          <h1
            className="uppercase max-w-[530px] font-geist text-5xl md:text-6xl font-bold text-white"
          >strengthen <br /> your resolve</h1>

          <p 
            className="font-medium max-w-[530px] text-white"
          >For every effort, every breakthrough — gear built to keep you going.</p>

          <div 
            className="flex gap-4"
          >
            <WhiteButton>Shop women's</WhiteButton>
            <WhiteButton>Shop men's</WhiteButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero