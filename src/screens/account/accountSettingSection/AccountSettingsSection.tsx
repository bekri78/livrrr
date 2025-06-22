import {
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    StarIcon,
  } from "lucide-react";

  
  export const AccountSettingsSection = (): JSX.Element => {
    const navigationItems = [
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
      <nav className="flex w-full h-[60px] items-center justify-between px-[26px] py-2.5 bg-white border-t border-[#e1e1e1]">
        {navigationItems.map((item, index) => (
          <div
            key={`nav-item-${index}`}
            className="flex flex-col items-center justify-center gap-0.5 flex-1"
          >
            {item.icon}
            <div className="text-[#8a8a8a] text-[10px] font-normal tracking-[0] leading-normal">
              {item.label}
            </div>
          </div>
        ))}
      </nav>
    );
  };
  