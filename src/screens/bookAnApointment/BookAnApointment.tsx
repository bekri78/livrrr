import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { BookingSection } from "./sections/BookingSection/BookingSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { SessionCardSection } from "./sections/SessionCardSection/SessionCardSection";
import { SectionComponents } from "../homeArticle/sections/sectionComponents";
import { useNavigate } from "react-router-dom";
export const BookAnApointment = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <main
      className="w-full max-w-[402px] mx-auto bg-white flex flex-col px-5"
      data-model-id="481:979"
    >
     

      <div className="flex flex-col w-full">
        
        <ServicesSection />
        <div className="flex items-center gap-1.5  pb-4">
        <div className="flex items-center gap-1.5 w-full">
          <Button variant="ghost" size="icon" className="p-0 h-auto w-auto">
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span className="sr-only">Go back</span>
          </Button>
          <nav className="inline-flex items-center gap-4">
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              SERVICES
            </span>
          </nav>
        </div>
      </div>
        <SessionCardSection />
              <SectionComponents />
      </div>
    </main>
  );
};
