import React from "react";

export const DateSelectorSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start gap-1 px-5 ">
      <span className="text-xs text-[#c6c4be] [font-family:'Futura_PT-Book',Helvetica] font-normal tracking-[0] leading-normal">
        BOOKING
      </span>
      <h2 className="text-lg text-black [font-family:'Futura_PT-Book',Helvetica] font-normal tracking-[0] leading-normal">
        SELECT TIME
      </h2>
    </header>
  );
};
