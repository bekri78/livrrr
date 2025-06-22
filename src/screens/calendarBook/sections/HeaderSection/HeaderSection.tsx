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
    DropdownMenuTrigger,
  } from "../../../../components/ui/dropdown-menu";
  import { useNavigate } from "react-router-dom";
  
  export const HeaderSection = (): JSX.Element => {
    const navigate = useNavigate();
    // Data for the header components
    const headerData = {
      dateSelector: {
        text: "Today",
        icon: "https://c.animaapp.com/mc86jl4bg0VCvn/img/package.svg",
      },
      brand: {
        name: "Livrr",
      },
      actions: {
        basket: "https://c.animaapp.com/mc86jl4bg0VCvn/img/basket-1.svg",
        profile: "https://c.animaapp.com/mc86jl4bg0VCvn/img/people-circle.svg",
      },
    };
  
    return (
      <header className="flex w-full items-center justify-between px-5 py-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-2 py-1 h-auto rounded border-[0.5px] border-solid border-black"
            >
              <PackageIcon className="w-5 h-5" />
              <span className="font-normal text-black text-xs">
                {headerData.dateSelector.text}
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {/* Dropdown content would go here */}
          </DropdownMenuContent>
        </DropdownMenu>
  
        <div className="flex items-center justify-center">
          <h1 className="[font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl">
            {headerData.brand.name}
          </h1>
        </div>
  
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            className="p-0 h-auto"
            aria-label="Shopping basket"
          >
            <ShoppingBasketIcon className="w-5 h-5"     onClick={() => navigate("/findYourArticles")} />
          </Button>
          <Button
            variant="ghost"
            className="p-0 h-auto"
            aria-label="User profile"
          >
            <UsersIcon className="w-5 h-5"   onClick={() => navigate("/account")} />
          </Button>
        </div>
      </header>
    );
  };
  