import { ChevronRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SeeAll = (): JSX.Element => {
  // Category data for mapping
  const categories = [
    "Nouveautés",
    "Robes",
    "Jupes",
    "Pantalons",
    "Tops",
    "Manteaux et vestes",
    "Maille",
    "Accessoires",
    "Chaussures",
    "Chemises et chemisiers",
    "Jeans",
    "Tenues décontractés",
    "Lingerie",
    "Tailleurs",
    "Tenues de sport",
    "Maillots de bains",
    "Voyage",
    "Bijoux",
    "Sacs",
  ];

  // Brand images data
  const brandImages = [
    {
      src: "https://c.animaapp.com/ma2vu314OllNwO/img/image-36.png",
      width: "115px",
      height: "27px",
    },
    {
      src: "https://c.animaapp.com/ma2vu314OllNwO/img/image-37.png",
      width: "78px",
      height: "43px",
    },
    {
      src: "https://c.animaapp.com/ma2vu314OllNwO/img/image-39.png",
      width: "82px",
      height: "44px",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[637px] items-center gap-[39px]">
      {/* Hero Banner Section */}
      <div className="flex items-center gap-[19px] relative w-full">
        <Card className="relative w-[299px] h-[138px] p-0 overflow-hidden border-0 rounded-none">
          <CardContent className="p-0 h-full">
            <div className="w-full h-full bg-[url(https://c.animaapp.com/ma2vu314OllNwO/img/image-31.png)] bg-cover bg-[50%_50%]">
              <div className="flex w-[290px] items-center justify-between relative top-[92px] left-[9px]">
                <div className="relative w-fit [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                  NEW IN
                </div>
                <Button
                  variant="default"
                  className="flex w-[88px] h-[41px] items-center justify-center p-2.5 bg-white hover:bg-white/90 rounded-none"
                >
                  <span className="relative w-fit [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                    DECOUVRIR
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <img
          className="w-16 h-[138px] relative object-cover"
          alt="Image"
          src="https://c.animaapp.com/ma2vu314OllNwO/img/image-31.png"
        />
      </div>

      {/* Brands Section */}
      <div className="flex flex-col items-start gap-4 w-full px-5">
        <div className="flex w-full max-w-[362px] items-center justify-between">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
            BRANDS
          </div>
          <div className="relative w-fit [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
            SEE ALL
          </div>
        </div>

        <div className="flex items-center gap-[39px] overflow-x-auto">
          {brandImages.map((brand, index) => (
            <img
              key={index}
              className={`relative object-cover`}
              style={{ width: brand.width, height: brand.height }}
              alt="Brand logo"
              src={brand.src}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col w-full max-w-[362px] items-start gap-4">
        {categories.map((category, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="border-0">
              <div className="flex items-center justify-between w-full">
                <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                  {category}
                </div>
                <ChevronRightIcon className="h-4 w-4" />
              </div>
              <AccordionContent className="hidden">
                {/* Content would go here if needed */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
