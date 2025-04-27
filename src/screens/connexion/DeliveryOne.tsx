
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

import { useNavigate } from "react-router-dom";

export const DeliveryOne = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="relative w-[402px] h-[874px] bg-white flex flex-col items-center">
      <header className="mt-[25px]">
        <h1 className="font-['IvyPresto_Display-Regular',Helvetica] text-[15px] text-[#757575]">
          Livrr
        </h1>
      </header>

      <Card className="w-[356px] mt-[140px] bg-transparent shadow-none border-none">
        <CardContent className="flex flex-col items-center gap-7 p-0">
          <div className="flex flex-col items-center justify-center gap-[30px] w-full">
            <h2 className="font-['Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center">
              DELIVERY PREFERENCES (1/2)
            </h2>
          </div>

          <p className="font-['General_Sans-Regular',Helvetica] text-black text-xs text-center w-full">
            We need your adress to match you with the best shops
          </p>

          <div className="flex flex-col items-start gap-3 w-full">
            <Input
              className="border-none px-0 font-['Futura_PT-Book',Helvetica] text-base text-[#777777] focus-visible:ring-0"
              placeholder="ADDRESS (EX. 170 RUE DEMILIER, PARIS...)"
            />
            <div className="w-full h-px bg-[#E5E5E5]"></div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <Button onClick={() => navigate("/delivery2")} className="w-full rounded-none bg-black hover:bg-black/90 font-['Futura_PT-Book',Helvetica] text-xs">
              NEXT
            </Button>

            <p className="font-['General_Sans-Regular',Helvetica] text-black text-xs text-center w-full">
              Don&apos;t worry, you will be able to change it :)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
