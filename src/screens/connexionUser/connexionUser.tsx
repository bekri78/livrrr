 
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const ConnexionUser = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <div className="absolute top-[25px] left-[187px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#757575] text-[15px] tracking-[0] leading-[normal]">
        Livrr
      </div>

      <Card className="border-none shadow-none w-[356px] absolute top-[189px] left-[23px]">
        <CardContent className="flex flex-col items-end gap-7 p-0">
          <div className="flex flex-col items-center justify-center gap-[30px] relative self-stretch w-full">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
              CONNEXION
            </div>
          </div>

          <div className="relative self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
            I want to see items who needs to be delivered in...
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]">
              EMAIL/NUMBER
            </label>
            <Input
              className="h-px p-0 border-0 rounded-none shadow-none"
              type="text"
            />
            <Separator className="w-full" />
          </div>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
            <label className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]">
              PASSWORD
            </label>
            <Input
              className="h-px p-0 border-0 rounded-none shadow-none"
              type="password"
            />
            <Separator className="w-full" />
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full">
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
              <Button onClick={() => navigate("/hommePage")} className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full bg-black rounded-none h-auto">
                <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                  SIGN IN
                </span>
              </Button>
            </div>

            <button    onClick={() => navigate("/forgotPassword")}
             className="relative self-stretch [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal] underline bg-transparent border-none cursor-pointer">
              Forgot password
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
