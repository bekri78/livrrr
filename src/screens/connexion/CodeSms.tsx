import { ChevronLeftIcon } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";

 import { useNavigate } from "react-router-dom";

export const CodeSms = (): JSX.Element => {
      const navigate = useNavigate();
  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <div className="flex flex-col w-[356px] items-end gap-7 absolute top-[189px] left-[23px]">
        <div className="flex flex-col items-center justify-center gap-[30px] relative self-stretch w-full">
          <h1 className="relative w-[229px] mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
            VERIFICATION CODE
          </h1>
        </div>

        <p className="relative self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
          <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0]">
            Enter the five digits sent to{" "}
          </span>
          <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0]">
            +33 6 52 70 00 00
          </span>
        </p>

        <div className="w-full">
          <InputOTP maxLength={5}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="h-[88px] rounded-sm border border-solid border-[#ababab]" />
              <InputOTPSlot index={1} className="h-[88px] rounded-sm border border-solid border-[#ababab]" />
              <InputOTPSlot index={2} className="h-[88px] rounded-sm border border-solid border-[#ababab]" />
              <InputOTPSlot index={3} className="h-[88px] rounded-sm border border-solid border-[#ababab]" />
              <InputOTPSlot index={4} className="h-[88px] rounded-sm border border-solid border-[#ababab]" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full">
          <Button  onClick={() => navigate("/hommePage")} className="w-full h-10 rounded-none bg-black hover:bg-black/90">
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
              ENTER
            </span>
          </Button>

          <button className="relative self-stretch [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal] underline">
            Send again
          </button>
        </div>
      </div>

      <button className="absolute top-8 left-[18px] w-[17px] h-[17px]">
        <ChevronLeftIcon className="w-full h-full" />
      </button>
    </div>
  );
};
