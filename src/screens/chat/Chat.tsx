import {
    ChevronRightIcon,
    HomeIcon,
    LayoutGridIcon,
    MenuIcon,
    MessageCircleIcon,
    ShoppingBasketIcon,
    StarIcon,
    UsersIcon,
  } from "lucide-react";
  import React from "react";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../components/ui/avatar";
  import { useNavigate } from "react-router-dom";
  import { SectionComponents } from "../homeArticle/sections/sectionComponents";
  import { Button } from "../../components/ui/button";
  import { Separator } from "../../components/ui/separator";
  
  export const Chat = (): JSX.Element => {
     const navigate = useNavigate();
    // Chat data for mapping
    const chats = [
      {
        name: "Jean",
        from: "Alexandr...",
        image: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-7-2.png",
        statusImage: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-8-2.png",
      },
      {
        name: "Jean",
        from: "AMI",
        image: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-7-2.png",
        statusImage: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-8-2.png",
      },
      {
        name: "Jean",
        from: "Maison Du...",
        image: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-7-2.png",
        statusImage: "https://c.animaapp.com/mc6qv9o1qUEpuc/img/ellipse-8-2.png",
      },
    ];
  
    // Navigation items
    const navItems = [
      { icon: <HomeIcon className="w-5 h-5" />, label: "Home", active: false },
      {
        icon: <LayoutGridIcon className="w-5 h-5" />,
        label: "Explore",
        active: false,
      },
      {
        icon: <StarIcon className="w-5 h-5" />,
        label: "Services",
        active: false,
      },
      {
        icon: <MessageCircleIcon className="w-5 h-5" />,
        label: "Chat",
        active: true,
      },
    ];
  
    return (
      <div
        className="relative w-[402px] h-[874px] bg-white"
        data-model-id="506:964"
      >
        {/* Header */}
        <div className="flex w-[355px] items-center justify-between absolute top-10 left-5">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <MenuIcon className="relative w-4 h-4" />
          </div>
  
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[39px] h-[34px] mt-[-1.00px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl tracking-[0] leading-[normal]">
              Livrr
            </div>
          </div>
  
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ShoppingBasketIcon onClick={() => { navigate("/findYourArticles")  }} className="relative w-5 h-5" />
            <UsersIcon onClick={() => { navigate("/account")  }} className="relative w-5 h-5" />
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col w-[353px] items-start gap-8 absolute top-[95px] left-[22px]">
          {/* Title Bar */}
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
              MY CHATS
            </div>
  
            <Button variant="ghost" className="h-auto p-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                ADD A CHAT
              </div>
            </Button>
          </div>
  
          {/* Chat List */}
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {chats.map((chat, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={chat.image} alt="Profile" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <img
                        className="absolute w-4 h-4 top-[19px] left-5 object-cover"
                        alt="Status"
                        src={chat.statusImage}
                      />
                    </div>
  
                    <div className="relative w-fit [font-family:'General_Sans-Regular',Helvetica] font-normal text-transparent text-base tracking-[0] leading-[normal]">
                      <span className="text-black">{chat.name} </span>
                      <span className="text-[#c7c4bf]">from</span>
                      <span className="text-black">&nbsp;</span>
                      <span className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-black">
                        {chat.from}
                      </span>
                    </div>
                  </div>
  
                  <Button
                    variant="ghost"
                    className="h-auto p-0 flex items-center gap-1"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                      View chat
                    </div>
                    <ChevronRightIcon className="relative w-5 h-5" />
                  </Button>
                </div>
  
                {index < chats.length - 1 && <Separator className="w-full" />}
              </React.Fragment>
            ))}
          </div>
        </div>
  <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>

        <SectionComponents />
  </div>
      </div>
    );
  };
  