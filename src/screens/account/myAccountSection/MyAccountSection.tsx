import { ChevronRightIcon } from "lucide-react";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/ui/radio-group";
import { Separator } from "../../../components/ui/separator";
import React from "react";
import { useNavigate } from "react-router-dom";

// Update the account items to include routes
const accountItems = [
  { label: "My articles", route: "/findYourArticles" },
  { label: "My refunds", route: "/refunds" },
  { label: "My chats", route: "/chat" },
  { label: "My WantedList", route: "/wanted-list" },
  { label: "My favorites shops/vendors", route: "/favorites" },
];

const generalItems = [
  { label: "Personal informations" },
  { label: "Delivery informations" },
  { label: "My gift program" },
];

const languageItems = [
  { label: "Language", value: "FRANCE" },
  { label: "Region", value: "EUR" },
];

export const MyAccountSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col w-full items-start gap-6">
      <div className="flex flex-col w-full items-start gap-1">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs tracking-[0] leading-[normal]">
          PARAMETERS
        </div>
        <div className="self-stretch [font-family:'Futura_PT-Book',Helvetica] font-normal text-lg text-left relative text-black tracking-[0] leading-[normal]">
          MY ACCOUNT
        </div>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col items-start gap-4 w-full">
        {accountItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full cursor-pointer"
            onClick={() => navigate(item.route)}
          >
            <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-xs text-black tracking-[0] leading-[normal]">
              {item.label}
            </div>
            <div className="inline-flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col items-start gap-[29px] w-full">
        {/* General section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs tracking-[0] leading-[normal]">
            GENERAL
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            {generalItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                  {item.label}
                </div>
                <div className="inline-flex items-center gap-2">
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language & Region section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs tracking-[0] leading-[normal]">
            LANGUAGE &amp; REGION
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            {languageItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                  {item.label}
                </div>
                <div className="inline-flex items-center gap-2">
                  <div className="mt-[-1.00px] text-black text-xs [font-family:'General_Sans-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                    {item.value}
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Preferences section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs tracking-[0] leading-[normal]">
            SHOPPING PREFERENCES
          </div>
          <RadioGroup defaultValue="man" className="w-full">
            <div className="flex items-center justify-between w-full">
              <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                Woman
              </div>
              <RadioGroupItem
                value="woman"
                id="woman"
                className="w-3 h-3 rounded-md"
              />
            </div>
            <div className="flex items-center justify-between w-full mt-4">
              <div className="mt-[-1.00px] text-black text-xs [font-family:'General_Sans-Regular',Helvetica] font-normal tracking-[0] leading-[normal]">
                Man
              </div>
              <RadioGroupItem
                value="man"
                id="man"
                className="w-3 h-3 rounded-md"
              />
            </div>
          </RadioGroup>
        </div>

        {/* Notifications section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs tracking-[0] leading-[normal]">
            NOTIFICATIONS
          </div>
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                Set notifications preferences
              </div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
