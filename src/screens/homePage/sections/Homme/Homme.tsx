 
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Homme = (): JSX.Element => {
  return (
    <Card
      className="relative w-full h-[455px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-4.png)",
      }}
    >
      <CardContent className="flex items-end h-full p-5">
        <div className="flex flex-col items-start gap-2 w-full">
          <h2 className="font-medium text-white text-[32px] [font-family:'Futura_PT-Medium',Helvetica] tracking-[0] leading-normal">
            HOMME
          </h2>
          <Button
            variant="default"
            className="w-full bg-white text-black hover:bg-white/90 p-2.5 rounded-none"
          >
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-normal">
              DECOUVRIR
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
