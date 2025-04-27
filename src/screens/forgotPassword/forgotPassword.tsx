import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";


export const ForgotPassword = (): JSX.Element => {
      const navigate = useNavigate();
  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col w-[356px] items-end gap-7 absolute top-[189px] left-[23px] p-0">
          <div className="flex flex-col items-center justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
              FORGOT PASSWORD
            </h1>
          </div>

          <p className="relative self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
            Enter the email you created your account with, you will receive
            shortly a reset link
          </p>

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <label className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]">
              EMAIL/NUMBER
            </label>
            <Input
              className="border-0 border-b border-black rounded-none px-0 h-px focus-visible:ring-0 focus-visible:ring-offset-0"
              type="email"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <Button onClick={() => navigate("/changePassword")}
               className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-black hover:bg-black/90 rounded-none">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                  SEND LINK
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        size="icon"
        className="absolute w-[17px] h-[17px] top-8 left-[18px] p-0 hover:bg-transparent"
      >
        <ChevronLeftIcon className="h-[17px] w-[17px]" />
      </Button>
    </div>
  );
};
