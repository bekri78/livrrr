import {
    ChevronDownIcon,
    PackageIcon,
    ShoppingBasketIcon,
    UsersIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../../../components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../../../../components/ui/dropdown-menu";
  
  export const DeliveryTrackingSection = (): JSX.Element => {
    const deliveryOptions = ["Today", "Tomorrow", "Next Week"];
  
    return (
      <div className="flex w-full items-center justify-between gap-4 py-2 px-5 border-b">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 text-xs border-black rounded"
            >
              <PackageIcon className="w-5 h-5" />
              <span className="font-normal">Today</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {deliveryOptions.map((option) => (
              <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
  
        <div className="flex-1 text-center">
          <h1 className="text-xl font-normal [font-family:'IvyPresto_Display-Regular',Helvetica] text-[#060607]">
            Livrr
          </h1>
        </div>
  
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ShoppingBasketIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <UsersIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  };
  