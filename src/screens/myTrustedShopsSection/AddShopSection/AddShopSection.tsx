import {
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    StarIcon,
  } from "lucide-react";
  import React from "react";
  
  export const AddShopSection = (): JSX.Element => {
    // Navigation items data for easy mapping
    const navItems = [
      {
        icon: <HomeIcon className="w-5 h-5" />,
        label: "Home",
      },
      {
        icon: <LayoutGridIcon className="w-5 h-5" />,
        label: "Explore",
      },
      {
        icon: <StarIcon className="w-5 h-5" />,
        label: "Services",
      },
      {
        icon: <MessageCircleIcon className="w-5 h-5" />,
        label: "Chat",
      },
    ];
  
    return (
      <nav className="flex w-full h-[60px] items-center justify-between px-[26px] py-2.5 bg-white border-t border-[#e1e1e1] border-solid">
        {navItems.map((item, index) => (
          <div
            key={`nav-item-${index}`}
            className="flex flex-col items-center justify-center gap-0.5 flex-1"
          >
            {item.icon}
            <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    );
  };
  