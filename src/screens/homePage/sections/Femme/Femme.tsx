
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const Femme = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Card
      className="relative w-full max-w-[100%] h-[455px] flex flex-col justify-end p-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-3.png)",
      }}
    >
      <CardContent className="p-0 space-y-2">
        <h2 className="font-medium text-white text-[32px] [font-family:'Futura_PT-Medium',Helvetica]">
          FEMME
        </h2>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button
          variant="default"
          className="w-full bg-white text-black hover:bg-white/90 p-2.5 h-auto rounded-none"
        >
          <span onClick={() => navigate("/explore")} className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
            DECOUVRIR
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};
