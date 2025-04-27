
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const Inspiration = (): JSX.Element => {
  return (
    <Card
      className="relative w-full max-w-[100%] h-[455px] flex flex-col justify-end p-5 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/frame-734.png)",
      }}
    >
      <CardContent className="p-0 flex flex-col items-start gap-2">
        <h2 className="mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-normal">
          INSPIRATION
        </h2>
        <p className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-normal">
          Comment s&apos;habiller pour aller au bureau
        </p>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button
          variant="default"
          className="w-full h-10 bg-white hover:bg-white/90 text-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-normal"
        >
          DECOUVRIR
        </Button>
      </CardFooter>
    </Card>
  );
};
