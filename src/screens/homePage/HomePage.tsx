import { ChevronDownIcon, PackageIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArtDeVivre } from "./sections/ArtDeVivre";
import { Beaute } from "./sections/Beaute";
import { BestSeller } from "./sections/BestSeller";
import { Cadeaux } from "./sections/Cadeaux";
import { Coeur } from "./sections/Coeur";
import { Enfants } from "./sections/Enfants";
import { Femme } from "./sections/Femme";
import { Focus } from "./sections/Focus";
import { Gourmet } from "./sections/Gourmet";
import { Homme } from "./sections/Homme";
import { Inspiration } from "./sections/Inspiration";
import { Journal } from "./sections/Journal";
import { PerfectLook } from "./sections/PerfectLook";
import { SecondMain } from "./sections/SecondMain";


export const HommePage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      {/* Header */}
      <header className="flex w-full items-center gap-16 p-5">
        <Button
          variant="outline"
          className="flex items-center gap-2 px-2 py-1 rounded border-[0.5px] border-solid border-black h-auto"
        >
          <PackageIcon className="w-5 h-5" />
          <span className="font-normal text-xs [font-family:'Futura_PT-Book',Helvetica]">
            Today
          </span>
          <ChevronDownIcon className="w-4 h-4" />
        </Button>

        <div className="flex h-5 items-center gap-4 flex-1">
          <div className="[font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl">
            Livrr
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <img
            className="w-5 h-5"
            alt="Basket"
            src="https://c.animaapp.com/ma033d4fpeOHG4/img/basket-1.svg"
          />
          <img
            className="w-5 h-5"
            alt="People circle"
            src="https://c.animaapp.com/ma033d4fpeOHG4/img/people-circle.svg"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col w-full">
      <Focus />
      <Coeur />
      <Cadeaux />
        <BestSeller />
        <Femme />
        <Homme />
        <SecondMain />
        <Enfants />
        <Beaute />
        <ArtDeVivre />
        <Gourmet />
         {/* Spring-Summer Section */}
         <section className="w-full relative bg-[url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-18.png)] bg-cover bg-[50%_50%] h-[455px]">
          <div className="flex flex-col w-[362px] items-start gap-2 absolute bottom-5 left-5">
            <div className="w-fit [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
              SPRING-SUMMER
            </div>
            <Card className="w-full bg-white p-0">
              <CardContent className="flex items-center justify-center p-2.5">
                <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
                  DECOUVRIR
                </span>
              </CardContent>
            </Card>
          </div>
        </section>
        <Journal />
       

      
        <Inspiration />
          {/* Runway Section */}
          <section className="w-full relative">
          <div className="relative w-full">
            <div className="absolute top-[148px]  left-10 [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[normal]">
              RUNWAY
            </div>
            <PerfectLook />
          </div>
        </section>

      

      </main>
    </div>
  );
};
