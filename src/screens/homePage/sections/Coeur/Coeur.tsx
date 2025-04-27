
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Coeur = (): JSX.Element => {
  return (
    <Card
      className="relative w-full h-[455px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image.png)",
      }}
    >
      <CardContent className="flex flex-col justify-end h-full p-5">
        <div className="flex flex-col items-start gap-2 w-full">
          <h2 className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[32px]">
            COUP DE COEUR
          </h2>

          <Button
            variant="default"
            className="w-full bg-white text-black hover:bg-white/90 p-2.5 h-auto rounded-none"
          >
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
              DECOUVRIR
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
