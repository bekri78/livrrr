import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ArticleItemSection = (): JSX.Element => {
  // Article data for reusability
  const articles = [
    {
      id: 1,
      title: "ARTICLE 1",
      store: "Saint honoré",
      size: "M",
      deliveryDate: "2:00 p.m to 7:00 p.m",
      deliveryStatus: "In progress",
      quantity: "1 unités",
      price: "60.90 EUR",
      image: "https://c.animaapp.com/mc847zxe448hct/img/image-1.png",
      actionType: "track", // track or details
    },
    {
      id: 2,
      title: "ARTICLE 1",
      store: "Saint honoré",
      size: "M",
      deliveryDate: "2:00 p.m to 7:00 p.m",
      deliveryStatus: "In progress",
      quantity: "1 unités",
      price: "60.90 EUR",
      image: "https://c.animaapp.com/mc847zxe448hct/img/image-1.png",
      actionType: "details", // track or details
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[362px] items-start gap-6">
      {/* Breadcrumb navigation */}
      <nav className="flex w-full items-center gap-1.5">
        <div className="flex items-center gap-1.5 relative flex-1">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
            SERVICES
          </span>
        </div>
      </nav>

      {/* Section header */}
      <header className="flex flex-col w-[111px] items-start gap-1">
        <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
          PARCELS
        </span>
        <h1 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
          MY ARTICLES
        </h1>
      </header>

      {/* Article cards */}
      {articles.map((article) => (
        <Card
          key={article.id}
          className="flex flex-col items-start gap-[23px] w-full border-none shadow-none p-0"
        >
          <CardContent className="flex items-start gap-5 p-0 w-full">
            <img
              className="w-[171px] h-[194px] object-cover"
              alt="Article image"
              src={article.image}
            />

            <div className="flex flex-col items-start gap-2 flex-1 self-stretch">
              {/* Article details */}
              <div className="flex flex-col items-start gap-1 flex-1 self-stretch w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex flex-col items-start gap-1">
                    <h2 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
                      {article.title}
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <StoreIcon className="w-3 h-3 text-[#8a8a8a]" />
                    <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                      {article.store}
                    </span>
                  </div>
                </div>

                {/* Article specifications */}
                <div className="flex items-start justify-between w-full">
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                    Size
                  </span>
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                    {article.size}
                  </span>
                </div>

                <div className="flex items-start justify-between w-full">
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                    Delivery Date
                  </span>
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                    {article.deliveryDate}
                  </span>
                </div>

                <div className="flex items-start justify-between w-full">
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                    Delivery Status
                  </span>
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                    {article.deliveryStatus}
                  </span>
                </div>
              </div>

              {/* Price information */}
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1">
                  <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                    {article.quantity}
                  </span>
                  <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
                    {article.price}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Action button */}
          {article.actionType === "track" ? (
            <Button className="w-full h-[35px] rounded-none bg-black text-white [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
              TRACK DELIVERY
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full h-[35px] rounded-none border-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs"
            >
              DETAILS
            </Button>
          )}
        </Card>
      ))}
    </section>
  );
};
