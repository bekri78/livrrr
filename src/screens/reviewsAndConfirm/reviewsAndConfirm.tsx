import {
    ArrowLeftIcon,
    CalendarIcon,
    ChevronDownIcon,
    ClockIcon,
    HomeIcon,
    LayoutGridIcon,
    MessageCircleIcon,
    PackageIcon,
    ShoppingBasketIcon,
    StarIcon,
    UserIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from "../../components/ui/select";
  import { Separator } from "../../components/ui/separator";
  import { useNavigate } from "react-router-dom";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";
  
  export const ReviewsAndConfirm = (): JSX.Element => {
     const navigate = useNavigate();
    // Navigation items for bottom bar
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
        data-model-id="482:1445"
      >
        {/* Header with back button and title */}
        <div className="flex w-[361px] items-center gap-1.5 absolute top-[84px] left-5">
          <div className="flex items-center gap-1.5 relative flex-1 grow">
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                TIME SELECTION
              </div>
            </div>
          </div>
        </div>
  
        {/* Main content */}
        <div className="flex flex-col w-[362px] items-start gap-6 absolute top-[131px] left-5">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
            REVIEW &amp; CONFIRM
          </div>
  
          <Card className="w-full border-none shadow-none">
            <CardContent className="p-0 space-y-4">
              {/* Boutique information */}
              <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[129px] h-[94px] [background:url(https://c.animaapp.com/mc87b1nw1OLlDn/img/image.png)_50%_50%_/_cover]" />
                <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                    BOUTIQUE SAINT HONORE
                  </div>
                  <div className="relative w-[219px] mr-[-6.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-xs tracking-[0] leading-[normal]">
                    170 Rue Georges Lacombe, 75002, Paris
                  </div>
                </div>
              </div>
  
              {/* Date and time information */}
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    Sat, 21 Sept 2024
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <ClockIcon className="w-3.5 h-3.5" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    11:30-1:45 (1 hour 30 mins duration)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
  
          {/* Service details */}
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                Relooking session
              </div>
              <div className="relative w-fit [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                (1 hour 30 mins duration)
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                $200
              </div>
            </div>
          </div>
  
          <Separator className="w-full" />
  
          {/* Total amount */}
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                Total
              </div>
              <div className="[font-family:'General_Sans-Regular',Helvetica] text-[#189100] relative w-fit font-normal text-xs tracking-[0] leading-[normal]">
                Pay now
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs tracking-[0] leading-[normal]">
                $200
              </div>
            </div>
          </div>
        {/* Payment button */}
        <div className="flex flex-col w-[362px] items-center gap-2.5  mt-5 left-5">
          <Button  onClick={() => navigate('/payments')} className="w-full h-10 bg-black text-white rounded-none hover:bg-black/90">
            <span className="mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-[normal]">
              PAY $200
            </span>
          </Button>
        </div>
        </div>
  
  
        {/* Top navigation */}
        <div className="flex w-[362px] items-center gap-16 absolute top-10 left-5">
          <Select defaultValue="today">
            <SelectTrigger className="inline-flex items-center gap-2 px-2 py-1 w-auto h-auto rounded border-[0.5px] border-solid border-black">
              <PackageIcon className="w-5 h-5" />
              <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                Today
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="next-week">Next Week</SelectItem>
            </SelectContent>
          </Select>
  
          <div className="inline-flex h-5 items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[39px] h-[34px] mt-[-8.00px] mb-[-6.00px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl tracking-[0] leading-[normal]">
              Livrr
            </div>
          </div>
  
          <div className="flex w-[97px] items-center justify-end gap-2 relative">
            <ShoppingBasketIcon className="w-5 h-5" />
            <UserIcon className="w-5 h-5" />
          </div>
        </div>
        <SectionComponents />
  
      </div>
    );
  };
  