
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Gourmet = (): JSX.Element => {
  return (
    <Card
      className="relative w-full max-w-[100%] h-[455px] p-5 flex flex-col justify-end bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-7.png)",
      }}
    >
      <CardContent className="p-0 flex flex-col items-start gap-2 w-full">
        <h2 className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-[#333333] text-[32px] tracking-[0] leading-normal">
          FINS GOURMETS
        </h2>
        <Button
          variant="default"
          className="w-full h-auto p-2.5 bg-white hover:bg-white/90 rounded-none"
        >
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-normal">
            DECOUVRIR
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
