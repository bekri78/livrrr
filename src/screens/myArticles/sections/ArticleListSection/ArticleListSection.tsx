import {
  HomeIcon,
  LayoutGridIcon,
  MessageCircleIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import

export const ArticleListSection = (): JSX.Element => {
  const navigate = useNavigate();
  
  const navigationItems = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      label: "Home",
      isActive: false,
      route: "/hommePage"
    },
    {
      icon: <LayoutGridIcon className="w-5 h-5" />,
      label: "Explore",
      isActive: false,
      route: "/explore"
    },
    {
      icon: <StarIcon className="w-5 h-5" />,
      label: "Services",
      isActive: true,
      route: "/services"
    },
    {
      icon: <MessageCircleIcon className="w-5 h-5" />,
      label: "Chat",
      isActive: false,
      route: "/chat"
    },
  ];

  return (
    <nav className="flex w-full h-[60px] items-center justify-between px-[26px] py-2.5 bg-white border-t border-[#e1e1e1]">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-0.5 flex-1 cursor-pointer"
          onClick={() => navigate(item.route)}
        >
          {item.icon}
          <div
            className={`[font-family:'General_Sans-Regular',Helvetica] font-normal text-[10px] tracking-[0] leading-normal ${
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
