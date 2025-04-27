
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const Enfants = (): JSX.Element => {
  return (
    <Card
      className="relative w-full max-w-[100%] h-[455px] flex flex-col justify-end p-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-8.png)",
      }}
    >
      <CardContent className="p-0 space-y-2">
        <h2 className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-[#333333] text-[32px]">
          ENFANTS
        </h2>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button
          variant="default"
          className="w-full bg-white hover:bg-white/90 text-black [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs p-2.5"
        >
          DECOUVRIR
        </Button>
      </CardFooter>
    </Card>
  );
};
