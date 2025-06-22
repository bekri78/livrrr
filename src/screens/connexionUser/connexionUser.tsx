import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import React from "react";

export const ConnexionUser = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrNumber: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoutez ici votre logique de validation
    if (formData.emailOrNumber && formData.password) {
      navigate("/hommePage");
    }
  };

  return (
    <div className="relative w-[402px] h-[874px] bg-white">
      <div className="absolute top-[25px] left-[187px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#757575] text-[15px] tracking-[0] leading-[normal]">
        Livrr
      </div>

      <Card className="border-none shadow-none w-[356px] absolute top-[189px] left-[23px]">
        <CardContent className="flex flex-col items-end gap-7 p-0">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full">
              <div className="relative w-fit [font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[0] leading-[normal]">
                CONNEXION
              </div>

              <div className="relative self-stretch [font-family:'General_Sans-Regular',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-[normal]">
                I want to see items who needs to be delivered in...
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                
                <Input
                  id="emailOrNumber"
                  name="emailOrNumber"
                  value={formData.emailOrNumber}
                  onChange={handleInputChange}
                  className="h-12 px-3 py-2 border-0 rounded-none shadow-none bg-transparent"
                  type="text"
                  required
                  placeholder="EMAIL/NUMBER"
                />
                <Separator className="w-full" />
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                 
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-12 px-3 py-2 border-0 rounded-none shadow-none bg-transparent"
                  type="password"
                  required
                  minLength={6}
                  placeholder="PASSWORD"
                />
                <Separator className="w-full" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full mt-4">
              <div className="flex flex-col items-center gap-4 relative self-stretch w-full">
                <Button 
                  type="submit"
                  className="flex items-center justify-center gap-2.5 p-4 relative self-stretch w-full bg-black rounded-none h-auto"
                >
                  <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                    SIGN IN
                  </span>
                </Button>
              </div>

              <button
                type="button"
                onClick={() => navigate("/forgotPassword")}
                className="relative self-stretch [font-family:'General_Sans-Medium',Helvetica] font-medium text-black text-xs text-center tracking-[0] leading-[normal] underline bg-transparent border-none cursor-pointer mt-2"
              >
                Forgot password
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
