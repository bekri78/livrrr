
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

import { useNavigate } from "react-router-dom";

export const Connexion = (): JSX.Element => {
  const navigate = useNavigate();
  // Form field data for mapping
  const formFields = [
    { id: "email", label: "EMAIL" },
    { id: "phone", label: "PHONE NUMBER" },
    { id: "firstName", label: "FIRST NAME" },
    { id: "lastName", label: "LAST NAME" },
    { id: "password", label: "PASSWORD" },
  ];

  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <div className="flex flex-col w-[356px] items-end gap-7 absolute top-[190px] left-[23px]">
        <Card className="w-full border-none shadow-none">
          <CardContent className="flex flex-col items-center justify-center gap-[30px] p-0">
            <div className="relative w-[229px] mt-[-1.00px] [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
              CREATE AN ACCOUNT
            </div>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] border border-solid border-black rounded-none h-auto"
            >
              <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                CONNECT WITH GOOGLE
              </span>
            </Button>

            <div className="flex items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
              <Separator className="flex-1 grow" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#dbdbdb] text-xs text-center tracking-[0] leading-[normal]">
                or
              </div>
              <Separator className="flex-1 grow" />
            </div>

            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
              >
                <label
                  htmlFor={field.id}
                  className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#777777] text-base tracking-[0] leading-[normal]"
                >
                  {field.label}
                </label>
                <Input
                  id={field.id}
                  className="border-0 border-b border-black h-px p-0 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Button onClick={() => navigate("/delivery1")} className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#00000066] rounded-none h-auto hover:bg-[#00000080]">
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
              REGISTER
            </span>
          </Button>

          <div className="relative self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
            <span className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs tracking-[0]">
              Lorem ipsum dolor sit amet consectetur. Ac ultrices mauris
              consectetur sed euismod sapien.{" "}
            </span>

            <span className="[font-family:'General_Sans-Medium',Helvetica] font-medium underline">
              Iaculis tincidunt curabitur.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-[25px] left-[187px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#757575] text-[15px] tracking-[0] leading-[normal]">
        Livrr
      </div>
    </div>
  );
};
