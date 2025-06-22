
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-1.png",
    name: "ARTICLE 3",
    price: "60.90 EUR",
    store: "Saint honoré",
    storeIcon: "https://c.animaapp.com/ma2wlpgp3a14sl/img/store-4.svg",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-2.png",
    name: "ARTICLE 4",
    price: "60.90 EUR",
    store: "Saint honoré",
    storeIcon: "https://c.animaapp.com/ma2wlpgp3a14sl/img/store-4.svg",
  },
];

export const SaintHonore2 = (): JSX.Element => {
  return (
    <div className="flex items-center gap-5 self-stretch w-full">
      {products.map((product) => (
        <Card key={product.id} className="flex-1 border-none shadow-none">
          <CardContent className="flex flex-col items-start gap-2 p-0">
            <img
              className="w-full h-[210px] object-cover"
              alt="Product image"
              src={product.image}
            />

            <div className="flex items-start gap-2 w-full">
              <div className="flex flex-col items-start gap-1 flex-1">
                <div className="w-full mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
                  {product.name}
                </div>
                <div className="w-full [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-[9px]">
                  {product.price}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <img className="w-3 h-3" alt="Store" src={product.storeIcon} />
                <div className="mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
                  {product.store}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
