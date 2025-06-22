import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const TrustedShopsSection = (): JSX.Element => {
  // Shop data for mapping
  const shops = [
    {
      id: 1,
      name: "AMI PARIS",
      image: "https://c.animaapp.com/mc85bn5amC0EIs/img/image-1.png",
      schedule: "From 8 a.m to 8 p.m",
      statusInfo: "Info 2",
      vendor: "Jean",
      vendorImage: "https://c.animaapp.com/mc85bn5amC0EIs/img/ellipse-7-1.png",
    },
    {
      id: 2,
      name: "AMI PARIS",
      image: "https://c.animaapp.com/mc85bn5amC0EIs/img/image-1.png",
      schedule: "From 8 a.m to 8 p.m",
      statusInfo: "Info 2",
      vendor: "Jean",
      vendorImage: "https://c.animaapp.com/mc85bn5amC0EIs/img/ellipse-7-1.png",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[353px] items-start gap-[17px]">
      <Accordion type="single"   defaultValue="trusted-shops" collapsible className="w-full">
        <AccordionItem value="trusted-shops" className="border-none">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="self-stretch [font-family:'Futura_PT-Book',Helvetica] text-[#c6c4be] text-xs font-normal tracking-[0] leading-[normal]">
              FAVORITE SHOPS
            </div>
            <AccordionTrigger className="p-0 hover:no-underline">
              <div className="flex-1 text-left [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                MY TRUSTED SHOPS
              </div>
            </AccordionTrigger>
          </div>

          <AccordionContent className="pt-4 pb-0 px-0">
            <div className="flex flex-col items-start gap-5 w-full">
              {shops.map((shop) => (
                <Card
                  key={shop.id}
                  className="flex items-start gap-5 w-full p-0 border-none shadow-none"
                >
                  <CardContent className="flex items-start gap-5 p-0 w-full">
                    <div
                      className="relative w-[168px] h-[122px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${shop.image})` }}
                    />

                    <div className="flex flex-col items-start gap-1 flex-1 self-stretch">
                      <div className="flex items-center gap-2 w-full">
                        <div className="flex items-center gap-1 flex-1">
                          <img
                            className="w-[18px] h-[18px]"
                            alt="Store"
                            src="https://c.animaapp.com/mc85bn5amC0EIs/img/store-4.svg"
                          />
                          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                            {shop.name}
                          </div>
                        </div>
                        <img
                          className="w-4 h-4"
                          alt="Trash can"
                          src="https://c.animaapp.com/mc85bn5amC0EIs/img/trash-can.svg"
                        />
                      </div>

                      <div className="flex items-start justify-between w-full">
                        <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px] tracking-[0] leading-[normal]">
                          Schedule
                        </div>
                        <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal]">
                          {shop.schedule}
                        </div>
                      </div>

                      <div className="flex items-start justify-between w-full">
                        <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px] tracking-[0] leading-[normal]">
                          Statut Info 2
                        </div>
                        <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px] tracking-[0] leading-[normal]">
                          {shop.statusInfo}
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full">
                        <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px] tracking-[0] leading-[normal]">
                          Favorite vendor
                        </div>
                        <div className="inline-flex items-start gap-1">
                          <img
                            className="w-3.5 h-3.5 object-cover"
                            alt="Vendor"
                            src={shop.vendorImage}
                          />
                          <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal]">
                            {shop.vendor}
                          </div>
                          <img
                            className="w-3.5 h-3.5"
                            alt="Message"
                            src="https://c.animaapp.com/mc85bn5amC0EIs/img/bubble-3-1.svg"
                          />
                        </div>
                      </div>

                      <div className="self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px] text-right tracking-[0] leading-[normal] underline">
                        Change vendor
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full h-10 rounded-none bg-black hover:bg-black/90 [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs">
        ADD A SHOP
      </Button>
    </div>
  );
};
