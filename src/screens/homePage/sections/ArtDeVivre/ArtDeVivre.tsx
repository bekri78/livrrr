
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ArtDeVivre = (): JSX.Element => {
  return (
    <Card
      className="relative w-full h-[455px] bg-cover bg-center p-5 flex items-end"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-6.png)",
      }}
    >
      <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
        <h2 className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-[#333333] text-[32px]">
          ART DE VIVRE
        </h2>
        <Button
          variant="default"
          className="w-full bg-white text-black hover:bg-white/90 p-2.5 h-auto rounded-none"
        >
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
            DECOUVRIR
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
