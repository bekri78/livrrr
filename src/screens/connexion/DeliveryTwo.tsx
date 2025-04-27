
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

import { useNavigate } from "react-router-dom";

export const DeliveryTwo = (): JSX.Element => {
    const navigate = useNavigate();
  // Delivery time options data
  const deliveryOptions = [
    { id: 1, text: "Less than 1 hour", selected: true },
    { id: 2, text: "Less than 2 hours", selected: false },
    { id: 3, text: "Less than 1 afternoon", selected: false },
  ];

  return (
    <div className="relative w-full max-w-[402px] h-[874px] bg-white mx-auto">
      <div className="absolute top-[25px] left-0 right-0 text-center">
        <span className="font-['IvyPresto_Display-Regular',Helvetica] text-[15px] text-[#757575]">
          Livrr
        </span>
      </div>

      <div className="flex flex-col w-[356px] gap-7 absolute top-[189px] left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center justify-center gap-[30px] w-full">
          <h1 className="font-['Futura_PT-Medium',Helvetica] font-medium text-black text-2xl text-center">
            DELIVERY PREFERENCES (2/2)
          </h1>
        </div>

        <p className="font-['General_Sans-Regular',Helvetica] text-black text-xs text-center">
          I want to see items who needs to be delivered in...
        </p>

        <div className="flex flex-col gap-2.5 w-full">
          {deliveryOptions.map((option) => (
            <Card
              key={option.id}
              className={`flex items-start gap-2.5 p-2.5 rounded overflow-hidden border ${
                option.selected ? "border-black" : "border-[#ababab59]"
              }`}
            >
              <span
                className={`font-['General_Sans-Regular',Helvetica] text-xs text-center ${
                  option.selected ? "text-black" : "text-[#9c9c9c]"
                }`}
              >
                {option.text}
              </span>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <Button onClick={() => navigate("/smsCode")} className="w-full bg-black text-white rounded font-['Futura_PT-Book',Helvetica] text-xs h-auto py-2.5">
            NEXT
          </Button>

          <p className="font-['General_Sans-Regular',Helvetica] text-black text-xs text-center">
            Don&apos;t worry, you will be able to change it :)
          </p>
        </div>
      </div>
    </div>
  );
};
