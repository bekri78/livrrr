
import { Navbar} from "./sections/navBar/Navbar";
import { Article1 } from "./sections/article1/Article1";
import { Article2 } from "./sections/article2/Article2";
import { Today } from "./sections/today/Today";
import { SaintHonore } from "./sections/saintHonore";
import { SaintHonore2 } from "./sections/saintHonore2";
import { SectionComponents } from "./sections/sectionComponents";
import React from "react";

export const HommeArticle = (): JSX.Element => {
  return (
    <div
    className="relative w-full max-w-[402px] min-h-[874px] bg-white overflow-hidden"
    data-model-id="419:1962"
    >
    <Today />
      <div className="w-full pt-[40px]">
    <Navbar />
        <div className="flex flex-col w-full max-w-[360px] items-start gap-5 mx-auto px-5">
          <SaintHonore />
          <SaintHonore2 />
          <Article2 />
          <Article1 />
        </div>

        <SectionComponents />
      </div>

      <div className="flex w-full max-w-[355px] items-center gap-1.5 absolute top-[84px] left-5">
        <div className="flex items-center gap-1.5 relative flex-1 grow">
          <img
            className="relative w-3.5 h-3.5"
            alt="Arrow left"
            src="https://c.animaapp.com/ma2wlpgp3a14sl/img/arrow-left.svg"
          />

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
              MAILLES
            </div>
          </div>
        </div>

        <img
          className="relative w-4 h-4"
          alt="Square placeholder"
          src="https://c.animaapp.com/ma2wlpgp3a14sl/img/square-placeholder.svg"
        />

        <img
          className="relative w-4 h-4"
          alt="Layout column"
          src="https://c.animaapp.com/ma2wlpgp3a14sl/img/layout-column.svg"
        />

        <img
          className="relative w-4 h-4"
          alt="Layout window"
          src="https://c.animaapp.com/ma2wlpgp3a14sl/img/layout-window.svg"
        />
      </div>

    
    
    </div>
  );
};
