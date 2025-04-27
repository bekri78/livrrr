import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { Card, CardContent } from "../../../../components/ui/card";

export const PerfectLook = (): JSX.Element => {
  // Image data for the grid
  const imageRows = [
    [
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-21.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-22-3.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-24.png",
    ],
    [
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-21-1.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-22-1.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-24-1.png",
    ],
    [
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-21-2.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-25.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-26.png",
    ],
    [
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-10.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-21-3.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-11.png",
    ],
    [
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-25.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-22-3.png",
      "https://c.animaapp.com/ma033d4fpeOHG4/img/image-26.png",
    ],
  ];

  return (
    <section className="flex flex-col w-full max-w-[100%] items-center gap-11">
      <Card className="w-full max-w-[348px] border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-start justify-center gap-1.5 p-0">
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs tracking-[0] leading-normal">
            INSPIRATION
          </span>

          <h3 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-sm tracking-[0] leading-normal">
            A RESEARCH TO FIND PERFECT LOOK
          </h3>

          <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-normal">
            Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper
            pretium amet consequat lectus eu egestas. Purus morbi amet lobortis
            ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis
            donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 w-full gap-0">
        {imageRows.map((row, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            {row.map((imgSrc, imgIndex) => (
              <div key={`img-${rowIndex}-${imgIndex}`} className="w-full">
                <AspectRatio ratio={1}>
                  <img
                    className="w-full h-[183px] object-cover"
                    alt={`Inspiration image ${rowIndex * 3 + imgIndex + 1}`}
                    src={imgSrc}
                  />
                </AspectRatio>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
