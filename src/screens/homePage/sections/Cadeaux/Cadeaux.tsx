
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Cadeaux = (): JSX.Element => {
  return (
    <Card
      className="relative w-full max-w-[100%] h-[455px] bg-no-repeat bg-cover bg-center p-5 flex items-end"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-1.png)",
      }}
    >
      <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
        <h2 className="mt-[-1px] font-medium text-white text-[32px] leading-normal [font-family:'Futura_PT-Medium',Helvetica]">
          CADEAUX
        </h2>
        <Button
          variant="default"
          className="w-full bg-white text-black hover:bg-white/90 p-2.5 rounded-none"
        >
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
            DECOUVRIR
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
