import { CalendarIcon, HelpCircleIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { useNavigate } from "react-router-dom";
export const ServicesSection = (): JSX.Element => {
  const navigate = useNavigate();
  // Wishlist items data
  const wishlistItems = [
    {
      image: "https://c.animaapp.com/mc6thnxuKW4cmr/img/image-27.png",
      title: "ARTICLE 1",
      price: "60.90 EUR",
    },
    {
      image: "https://c.animaapp.com/mc6thnxuKW4cmr/img/image.png",
      title: "ARTICLE 1",
      price: "60.90 EUR",
    },
  ];

  // Trusted shops data
  const trustedShops = [
    {
      image: "https://c.animaapp.com/mc6thnxuKW4cmr/img/image-4.png",
      name: "AMI PARIS",
    },
    {
      image: "https://c.animaapp.com/mc6thnxuKW4cmr/img/image-4.png",
      name: "AMI PARIS",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[362px] items-start gap-6">
      <Separator className="w-full" />

      {/* Delivery Section */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="flex-1 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs">
              DELIVERY
            </div>
          </div>

          <div className="flex items-center gap-1 w-full">
            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
              FIND ALL YOUR ARTICLES
            </div>
          </div>
        </div>

        <div className="relative w-full h-[162px] bg-[url(https://c.animaapp.com/mc6thnxuKW4cmr/img/---map-maker--paris--frane--nights-.png)] bg-cover bg-center">
          <div className="inline-flex items-center gap-1 p-2 absolute top-[65px] left-[99px] bg-white">
            <MapPinIcon className="w-4 h-4" />
            <div className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs">
              FOLLOW MY PARCELS
            </div>
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      {/* Appointment Section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="flex items-start gap-4 w-full">
            <div className="flex-1 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs">
              BOOK AN APPOITMENT
            </div>
          </div>

          <div className="flex items-center gap-1 w-full">
            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
              GET ADVISED BY THE BESTS
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <img
            className="w-full h-[283px] object-cover"
            alt="Map maker paris"
            src="https://c.animaapp.com/mc6thnxuKW4cmr/img/---map-maker--paris--frane--nights--1.png"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-1.5 w-full">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
            LET YOU GUIDE BY OUR SPECIALISTS
          </div>

          <div className="w-full [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
            Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper
            pretium amet consequat lectus eu egestas. Purus morbi amet lobortis
            ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis
            donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.
          </div>
        </div>

        <div className="w-full">
          <Button  onClick={() => navigate("/bookAnApointment")} className="w-full bg-black text-white rounded-none h-10 flex items-center justify-center gap-2.5">
            <CalendarIcon className="w-4 h-4" />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
              BOOK AN APPOITMENT
            </span>
          </Button>
        </div>
      </div>

      <Separator className="w-full" />

      {/* Wishlist Section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex items-start gap-4 w-full">
              <div className="flex-1 [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c7c4bf] text-xs">
                WANTED ITEMS
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
                MY WISHLIST
              </div>

              <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
                SEE ALL
              </div>
            </div>
          </div>

          <div className="flex w-full overflow-x-auto gap-5 pb-2">
            {wishlistItems.map((item, index) => (
              <Card
                key={index}
                className="w-[171px] min-w-[171px] rounded-none border-none"
              >
                <CardContent className="p-0 flex flex-col gap-2">
                  <img
                    className="w-full h-[210px] object-cover"
                    alt={`Wishlist item ${index + 1}`}
                    src={item.image}
                  />
                  <div className="flex flex-col items-start gap-1">
                    <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
                      {item.title}
                    </div>
                    <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-[9px]">
                      {item.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {/* Third item from original code */}
            <Card className="w-[140px] min-w-[140px] rounded-none border-none">
              <CardContent className="p-0 flex flex-col gap-2">
                <img
                  className="w-full h-[210px] object-cover"
                  alt="Wishlist item 3"
                  src="https://c.animaapp.com/mc6thnxuKW4cmr/img/image-1.png"
                />
                <div className="flex flex-col items-start gap-1 w-[50px]">
                  <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
                    ARTICLE 1
                  </div>
                  <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-[9px]">
                    60.90 EUR
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Trusted Shops Section */}
      <div className="flex flex-col items-start gap-[17px] w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
            FAVORITE SHOPS
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
              MY TRUSTED SHOPS
            </div>

            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              SEE ALL
            </div>
          </div>
        </div>

        <div className="flex w-full overflow-x-auto gap-5 pb-2">
          {trustedShops.map((shop, index) => (
            <Card
              key={index}
              className="w-[171px] min-w-[171px] h-[243px] rounded-none border-none"
            >
              <CardContent className="p-0 flex flex-col gap-2 h-full">
                <div
                  className="flex-1 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${shop.image})` }}
                />
                <div className="inline-flex items-center gap-1">
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Store"
                    src="https://c.animaapp.com/mc6thnxuKW4cmr/img/store-4.svg"
                  />
                  <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
                    {shop.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {/* Third shop from original code */}
          <Card className="w-[140px] min-w-[140px] h-[243px] rounded-none border-none">
            <CardContent className="p-0 flex flex-col gap-2 h-full">
              <div
                className="flex-1 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://c.animaapp.com/mc6thnxuKW4cmr/img/image-4.png)`,
                }}
              />
              <div className="inline-flex items-center gap-1">
                <img
                  className="w-px h-[18px]"
                  alt="Store"
                  src="https://c.animaapp.com/mc6thnxuKW4cmr/img/store-4.svg"
                />
                <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
                  AMI PARIS
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full h-[35px]" />
      </div>

      <Separator className="w-full" />

      {/* Contact Section */}
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
          ANY PROBLEM ?
        </div>

        <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg text-center">
          CONTACT US
        </div>
      </div>

      <div className="w-full">
        <Button className="w-full bg-black text-white rounded-none h-10 flex items-center justify-center gap-2.5">
          <HelpCircleIcon className="w-4 h-4" />
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
            GET A CHAT
          </span>
        </Button>
      </div>
    </div>
  );
};
