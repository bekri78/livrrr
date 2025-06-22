import {
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    StarIcon,
  } from "lucide-react";
  import React from "react";
  
  export const ArticlesSection = (): JSX.Element => {
    // Navigation items data for mapping
    const navigationItems = [
      {
        icon: <HomeIcon className="w-5 h-5" />,
        label: "Home",
        isActive: false,
      },
      {
        icon: <LayoutGridIcon className="w-5 h-5" />,
        label: "Explore",
        isActive: false,
      },
      {
        icon: <StarIcon className="w-5 h-5" />,
        label: "Services",
        isActive: true,
      },
      {
        icon: <MessageCircleIcon className="w-5 h-5" />,
        label: "Chat",
        isActive: false,
      },
    ];
  
    return (
      <nav className="flex w-full h-[60px] items-center justify-between px-[26px] py-2.5 bg-white border-t border-[#e1e1e1]">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-0.5 flex-1"
          >
            {item.icon}
            <div
              className={`w-fit [font-family:'General_Sans-Regular',Helvetica] font-normal text-[10px] tracking-[0] leading-[normal] ${
                item.isActive ? "text-black" : "text-[#8a8a8a]"
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    );
  };
  