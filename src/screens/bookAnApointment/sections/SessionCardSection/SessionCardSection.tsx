import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Session data for mapping
const sessions = [
  {
    title: "RELOOKING SESSION",
    image: "https://c.animaapp.com/mc6utaqvqS5t4k/img/image-2.png",
    boutique: "Saint honoré",
    time: "1h-1h45",
    price: "From $40",
  },
  {
    title: "BEAUTY SESSION",
    image: "https://c.animaapp.com/mc6utaqvqS5t4k/img/image-1.png",
    boutique: "HORACE",
    time: "1h-1h45",
    price: "From $40",
  },
  {
    title: "FOOD DEGUSTATION",
    image: "https://c.animaapp.com/mc6utaqvqS5t4k/img/frame-699.png",
    isFullImage: true,
    boutique: "HORACE",
    time: "1h-1h45",
    price: "From $40",
  },
  {
    title: "PERSONAL SHOPPER",
    image: "https://c.animaapp.com/mc6utaqvqS5t4k/img/image-2.png",
    boutique: "Saint honoré",
    time: "1h-1h45",
    price: "From $40",
  },
];

export const SessionCardSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full max-w-[362px] items-start gap-5">
      {sessions.map((session, index) => (
        <Card key={index} className="w-full border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center gap-5 w-full">
              {session.isFullImage ? (
                <img
                  className="w-[171px] h-[169px] object-cover"
                  alt={session.title}
                  src={session.image}
                />
              ) : (
                <div className="w-[171px] h-[169px]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${session.image})` }}
                  />
                </div>
              )}

              <div className="flex flex-col items-start gap-4 flex-1">
                <h3 className="self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm">
                  {session.title}
                </h3>

                <div className="flex flex-col items-start gap-2 self-stretch w-full">
                  <div className="flex items-start justify-between self-stretch w-full">
                    <div className="inline-flex items-center gap-1">
                      <img
                        className="w-3 h-3"
                        alt="Store"
                        src="https://c.animaapp.com/mc6utaqvqS5t4k/img/store-4.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                        Boutique:
                      </span>
                    </div>
                    <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                      {session.boutique}
                    </span>
                  </div>

                  <div className="flex items-start justify-between self-stretch w-full">
                    <div className="inline-flex items-center gap-1">
                      <img
                        className="w-3 h-3"
                        alt="Clock"
                        src="https://c.animaapp.com/mc6utaqvqS5t4k/img/clock.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                        Time
                      </span>
                    </div>
                    <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                      {session.time}
                    </span>
                  </div>

                  <div className="flex items-start justify-between self-stretch w-full">
                    <div className="inline-flex items-center gap-1">
                      <img
                        className="w-3 h-3"
                        alt="Banknote"
                        src="https://c.animaapp.com/mc6utaqvqS5t4k/img/banknote-1.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                        Price
                      </span>
                    </div>
                    <span className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-[10px]">
                      {session.price}
                    </span>
                  </div>
                </div>

                <Button
                onClick={() => navigate("/calendarBook")}
                  variant="outline"
                  className="h-[35px] w-full rounded-none border-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs"
                >
                  BOOK A SESSION
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
