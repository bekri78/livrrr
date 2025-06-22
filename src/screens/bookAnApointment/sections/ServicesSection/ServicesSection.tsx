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
  import { useNavigate } from "react-router-dom";
  export const ServicesSection = (): JSX.Element => {
      const navigate = useNavigate();
    // Data for dropdown options
    const dateOptions = ["Today", "Tomorrow", "This Week"];
  
    return (
      <header className="flex w-full items-center justify-between p-4 border-b">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 text-xs border-black"
            >
              <PackageIcon className="h-5 w-5" />
              <span className="font-normal">Today</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {dateOptions.map((option) => (
              <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
  
        <div className="flex items-center">
          <h1 className="font-normal text-xl text-[#060607] [font-family:'IvyPresto_Display-Regular',Helvetica]">
            Livrr
          </h1>
        </div>
  
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ShoppingBasketIcon className="h-5 w-5" />
          </Button>
          <Button  onClick={() => navigate("/account")} variant="ghost" size="icon" className="h-10 w-10">
            <UsersIcon  className="h-5 w-5" / >
          </Button>
        </div>
      </header>
    );
  };
  