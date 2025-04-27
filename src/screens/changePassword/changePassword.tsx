
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const ChangePassword = (): JSX.Element => {
  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <div className="absolute top-[25px] left-[187px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#757575] text-[15px] tracking-[0] leading-[normal]">
        Livrr
      </div>

      <Card className="border-none shadow-none w-[356px] absolute top-[189px] left-[23px]">
        <CardContent className="flex flex-col items-end gap-7 p-0">
          <div className="flex flex-col items-center justify-center gap-[30px] relative self-stretch w-full">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
              CHANGE PASSWORD
            </h1>
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]">
              NEW PASSWORD
            </label>
            <Input
              type="password"
              className="h-px p-0 border-0 border-b border-[#777777] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]">
              CONFIRM PASSWORD
            </label>
            <Input
              type="password"
              className="h-px p-0 border-0 border-b border-[#777777] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full">
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
              <Button className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full bg-black rounded-none hover:bg-black/90">
                <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                  CHANGE PASSWORD
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
