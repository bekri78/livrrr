
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const Beaute = (): JSX.Element => {
  return (
    <Card
      className="relative flex flex-col justify-end w-full max-w-[100%] h-[455px] p-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://c.animaapp.com/ma033d4fpeOHG4/img/image-5.png)",
      }}
    >
      <CardContent className="p-0 space-y-2">
        <h2 className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-[#333333] text-[32px] leading-normal">
          BEAUTE ET BIEN ETRE
        </h2>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button
          variant="default"
          className="w-full bg-white hover:bg-gray-100 text-black p-2.5 h-auto"
        >
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
            DECOUVRIR
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};
