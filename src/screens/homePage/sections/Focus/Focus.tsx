
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Focus = (): JSX.Element => {
  return (
    <Card
      className="relative w-full h-[455px] bg-no-repeat bg-cover bg-center flex items-end p-5"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/frame-733.png)",
      }}
    >
      <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
        <h2 className="mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[32px] leading-normal">
          FOCUS
        </h2>

        <p className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-xs leading-normal">
          Comment s&apos;habiller pour aller au bureau
        </p>

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
