import {
    ArrowLeftIcon,
    MenuIcon,
    ShoppingCartIcon,
    UserIcon,
  } from "lucide-react";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import { MyAccountSection } from "./myAccountSection/MyAccountSection";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";
  
  export const Account = (): JSX.Element => {
     const navigate = useNavigate();
    return (
      <div
        className="relative w-full px-5  mx-auto bg-white flex flex-col"
        data-model-id="486:4904"
      >
        <header className="flex items-center justify-between p-5 w-full">
          <div className="flex items-center gap-2">
            <ArrowLeftIcon  onClick={() => { navigate("/hommePage")  }} className="w-4 h-4" />
     
          </div>
  
          <div className="flex items-center">
            <div className="[font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl">
              Livr
            </div>
          </div>
  
          <div className="flex items-center gap-2">
            <ShoppingCartIcon className="w-5 h-5" />
            <UserIcon className="w-5 h-5" />
          </div>
        </header>
  
        <main className="flex flex-col w-full">
          <MyAccountSection />
         
            <SectionComponents />
        </main>
      </div>
    );
  };
  