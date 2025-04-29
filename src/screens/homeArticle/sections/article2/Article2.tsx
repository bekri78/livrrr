
import { Card, CardContent } from "../../../../components/ui/card";

export const Article2 = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-3.png",
      name: "ARTICLE 1",
      price: "60.90 EUR",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-4.png",
      name: "ARTICLE 1",
      price: "60.90 EUR",
    },
  ];

  return (
    <div className="flex items-center gap-5 self-stretch w-full">
      {products.map((product) => (
        <Card key={product.id} className="flex-1 border-none shadow-none">
          <CardContent className="flex flex-col items-start gap-2 p-0">
            <img
              className="h-[189px] w-full object-cover"
              alt="Product image"
              src={product.image}
            />
            <div className="flex flex-col w-[50px] items-start gap-1">
              <div className="self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                {product.name}
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
