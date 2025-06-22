import { MenuIcon, ShoppingBasketIcon } from "lucide-react";
import React from "react";
 
 
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";
export const Services = (): JSX.Element => {
  
  return (
    <div
      className="relative w-full px-5  mx-auto bg-white"
      data-model-id="479:3"
    >
      <header className="flex w-full items-center justify-between p-5">
        

        <div className="flex items-center">
          <div className="[font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl">
            Livrr
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-5 h-5"
            alt="Basket"
            src="https://c.animaapp.com/mc6thnxuKW4cmr/img/basket-1.svg"
          />
          <img
            className="w-5 h-5"
            alt="People circle"
            src="https://c.animaapp.com/mc6thnxuKW4cmr/img/people-circle.svg"
          />
        </div>
      </header>

      <section className="flex flex-col w-full px-5 mb-4">
        <div className="flex flex-col items-start gap-1">
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
            WE ARE HERE FOR YOU
          </span>
          <h1 className="[font-family:'Futura_PT-Book',Helvetica] text-lg font-normal text-black">
            SERVICES
          </h1>
        </div>
      </section>

      <ServicesSection />
        <SectionComponents />
    </div>
  );
};
