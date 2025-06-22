
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Article1 = (): JSX.Element => {
  // Product data array for mapping
  const products = [
    {
      id: 1,
      title: "ARTICLE ",
      price: "60.90 EUR",
      image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-27-2.png",
    },
    {
      id: 2,
      title: "ARTICLE ",
      price: "60.90 EUR",
      image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-27-2.png",
    },
  ];

  return (
    <div className="flex items-center gap-2.5 w-full">
      {products.map((product) => (
        <Card key={product.id} className="flex-1 border-none shadow-none">
          <CardContent className="flex flex-col items-start gap-2 p-0">
            <img
              className="w-full h-[210px] object-cover"
              alt="Product image"
              src={product.image}
            />
            <div className="flex flex-col w-[50px] items-start gap-1">
              <div className="self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                {product.title}
              </div>
              <div className="self-stretch [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-[9px] tracking-[0] leading-[normal]">
                {product.price}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
