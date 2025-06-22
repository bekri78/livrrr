import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
export const TimeSlotsSection = (): JSX.Element => {
   const navigate = useNavigate();
  // Date data for the date selector
  const dates = [
    { day: "18", weekday: "WED", selected: true },
    { day: "19", weekday: "THU", selected: false },
    { day: "20", weekday: "FRI", selected: false },
    { day: "21", weekday: "SAT", selected: false },
    { day: "22", weekday: "SUN", selected: false },
    { day: "23", weekday: "MON", selected: false },
    { day: "24", weekday: "THU", selected: false },
  ];

  // Time slots data
  const timeSlots = ["11:00 AM", "11:30 AM", "02:00 PM"];

  return (
    <div className="flex flex-col w-full max-w-[362px] items-start gap-10">
      {/* Month selector with navigation */}
      <div className="flex items-center gap-5 relative self-stretch w-full">
        <div className="flex items-center gap-2 relative flex-1 grow">
          <CalendarIcon className="w-6 h-6" />
          <div className="[font-family:'Futura_PT-Medium',Helvetica] font-medium text-black text-lg">
            SEPTEMBER 2024
          </div>
        </div>

        <div className="flex items-center gap-[7px]">
          <Button
            variant="outline"
            size="icon"
            className="p-2.5 border border-solid border-[#dedede] rounded-none h-auto w-auto"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="p-2.5 border border-solid border-[#dedede] rounded-none h-auto w-auto"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Date selector */}
      <div className="flex items-center gap-3.5 relative self-stretch w-full">
        {dates.map((date, index) => (
          <div
            key={index}
            className="flex flex-col w-[43px] items-center gap-2"
          >
            <Button
              variant={date.selected ? "default" : "outline"}
              className={`flex flex-col items-center justify-center p-2.5 w-full h-auto rounded-sm ${
                date.selected
                  ? "bg-black text-white"
                  : "bg-transparent border border-solid border-[#dedede]"
              }`}
            >
              <div
                className={`w-[19px] text-lg ${
                  date.selected
                    ? "[font-family:'Futura_PT-Medium',Helvetica] font-medium"
                    : "[font-family:'Futura_PT-Book',Helvetica] font-normal"
                }`}
              >
                {date.day}
              </div>
            </Button>
            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs text-center w-full">
              {date.weekday}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="flex flex-col items-start gap-3 self-stretch w-full">
        {timeSlots.map((time, index) => (
          <Button
          onClick={() => navigate("/reviewsAndConfirm")}
            key={index}
            variant="outline"
            className="flex h-[35px] items-center justify-start p-2.5 self-stretch w-full border border-solid border-[#dedede] rounded-none bg-transparent text-black hover:text-black hover:bg-gray-50"
          >
            <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-xs">
              {time}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
