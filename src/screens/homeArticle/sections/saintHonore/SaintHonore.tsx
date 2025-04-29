import { StoreIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image-27-2.png",
    name: "ARTICLE 1",
    price: "60.90 EUR",
    store: "Saint honoré",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/ma2wlpgp3a14sl/img/image.png",
    name: "ARTICLE 1",
    price: "60.90 EUR",
    store: "Saint honoré",
  },
];

export const SaintHonore = (): JSX.Element => {
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
                <StoreIcon className="w-3 h-3" />
                <div className="w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#8a8a8a] text-[10px]">
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
