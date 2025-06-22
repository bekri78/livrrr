import { ArrowLeftIcon, ShoppingBasketIcon, UserIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TrustedShopsSection } from "./TrustedShopsSection";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";

export const MyTrustedShopsSection = (): JSX.Element => {
      const navigate = useNavigate();
  return (
    <div
      className="relative  px-5 w-full max-w-[402px] min-h-[874px] bg-white flex flex-col"
      data-model-id="445:2320"
    >
      {/* Header with logo and icons */}
      <header className="flex items-center justify-between w-full px-5 pt-10">
        

        <div className="flex items-center">
          <h1 className="font-normal text-xl text-[#060607] [font-family:'IvyPresto_Display-Regular',Helvetica]">
            Livrr
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <ShoppingBasketIcon onClick={() => { navigate("/findYourArticles")  }} className="w-5 h-5" />
          <UserIcon className="w-5 h-5"   onClick={() => { navigate("/account")  }}/>
        </div>
      </header>

      {/* Navigation title */}
      <div className="flex items-center gap-1.5 px-5 mt-5">
        <ArrowLeftIcon className="w-3.5 h-3.5" />
        <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
          MY FAVORITE SHOPS/VENDORS
        </span>
      </div>

      {/* Main content sections */}
      <div className="flex flex-col flex-1 w-full">
        <TrustedShopsSection />
           <SectionComponents />
      </div>
    </div>
  );
};
