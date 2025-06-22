import {
    ChevronDownIcon,
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    PackageIcon,
    ShoppingBasketIcon,
    StarIcon,
    UsersIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";
import { useNavigate } from "react-router-dom";
  export const Payments = (): JSX.Element => {
      const navigate = useNavigate();
    // Navigation items data
    const navigationItems = [
      { icon: <HomeIcon className="w-5 h-5" />, label: "Home", active: false },
      {
        icon: <LayoutGridIcon className="w-5 h-5" />,
        label: "Explore",
        active: false,
      },
      { icon: <StarIcon className="w-5 h-5" />, label: "Services", active: true },
      {
        icon: <MessageCircleIcon className="w-5 h-5" />,
        label: "Chat",
        active: false,
      },
    ];
  
    return (
      <div
        className="relative w-[402px] h-[874px] bg-white"
        data-model-id="483:1611"
      >
        {/* Main content */}
        <div className="flex flex-col w-[362px] items-center gap-8 absolute top-[282px] left-5">
          {/* Confirmation header */}
          <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs text-center tracking-[0] leading-[normal]">
              THANK YOU!
            </div>
            <div className="relative self-stretch [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
              YOUR BOOKING IS CONFIRMED
            </div>
          </div>
  
          {/* Checkmark circle */}
          <div className="relative w-[126px] h-[126px] bg-[#f7f7f7] rounded-[63px] flex items-center justify-center">
            <img
              className="w-10 h-10"
              alt="Checkmark"
              src="https://c.animaapp.com/mc87v5op1Q798f/img/checkmark-1.svg"
            />
          </div>
  
          {/* Reminder text */}
          <div className="relative w-[156px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px] text-center tracking-[0] leading-[normal]">
            You will recieve a reminder.
          </div>
  
          {/* Back to services button */}
          <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Button
            onClick={() => navigate('/services')}
              variant="default"
              className="w-full h-10 bg-black hover:bg-black/90 rounded-none"
            >
              <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs">
                GO BACK TO SERVICES
              </span>
            </Button>
          </div>
        </div>
  
        {/* Header section */}
        <div className="flex w-[362px] items-center gap-16 absolute top-10 left-5">
          {/* Today dropdown */}
          <Button
            variant="outline"
            className="h-auto px-2 py-1 flex items-center gap-2 rounded border-[0.5px] border-solid border-black"
          >
            <PackageIcon className="w-5 h-5" />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              Today
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
  
          {/* Logo */}
          <div className="inline-flex h-5 items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[39px] h-[34px] mt-[-8.00px] mb-[-6.00px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl tracking-[0] leading-[normal]">
              Livrr
            </div>
          </div>
  
          {/* Icons */}
          <div className="flex w-[97px] items-center justify-end gap-2 relative">
            <ShoppingBasketIcon className="w-5 h-5" />
            <UsersIcon className="w-5 h-5" />
          </div>
        </div>
  
        {/* Bottom navigation */}
          <SectionComponents />
      </div>
    );
  };
  