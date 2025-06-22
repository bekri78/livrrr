import {
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    StarIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SectionComponents = (): JSX.Element => {
    const navigate = useNavigate();
    
    const navItems = [
        {
            icon: <HomeIcon className="w-5 h-5" />,
            label: "Home",
            active: false,
            route: "/hommePage"  // Route vers la page d'accueil
        },
        {
            icon: <LayoutGridIcon className="w-5 h-5" />,
            label: "Explore",
            active: true,
            route: "/explore"    // Route vers la page d'exploration
        },
        {
            icon: <StarIcon className="w-5 h-5" />,
            label: "Services",
            active: false,
            route: "/services"   // Route vers la page des services
        },
        {
            icon: <MessageCircleIcon className="w-5 h-5" />,
            label: "Chat",
            active: false,
            route: "/chat"       // Route vers la page de chat
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 flex w-full h-[60px] items-center justify-between px-[26px] py-2.5 bg-white border-t border-[#e1e1e1] z-50">
            {navItems.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-0.5 flex-1 cursor-pointer"
                    onClick={() => navigate(item.route)}
                >
                    {item.icon}
                    <div
                        className={`[font-family:'General_Sans-Regular',Helvetica] font-normal text-[10px] tracking-[0] leading-[normal] ${
                            item.active ? "text-black" : "text-[#8a8a8a]"
                        }`}
                    >
                        {item.label}
                    </div>
                </div>
            ))}
        </nav>
    );
};
