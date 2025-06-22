import React from "react";
import { BookingSection } from "../sections/BookingSection";
import { DateSelectorSection } from "../sections/DateSelectorSection";
import { HeaderSection } from "../sections/HeaderSection";
import { TimeSlotsSection } from "../sections/TimeSlotsSection";
import { SectionComponents } from "../../homeArticle/sections/sectionComponents";

export const CalendarBookAnApointment = (): JSX.Element => {
  return (
    <main
      className="relative w-full max-w-[402px] mx-auto bg-white flex flex-col"
      data-model-id="482:1258"
    >
      <HeaderSection />
      <DateSelectorSection />
      <TimeSlotsSection />
      <SectionComponents />
    </main>
  );
};
