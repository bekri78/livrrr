import {
    ChevronDownIcon,
    PackageIcon,
    ShoppingBasketIcon,
    UsersIcon,
  } from "lucide-react";
  
  import { Button } from "../../../../components/ui/button";
  
  export const Today = (): JSX.Element => {
    return (
      <header className="flex w-full items-center justify-between gap-4 p-4">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 px-2 py-1 rounded border-[0.5px] border-solid border-black h-auto"
        >
          <PackageIcon className="w-5 h-5" />
          <span className="font-normal text-black text-xs">Today</span>
          <ChevronDownIcon className="w-4 h-4" />
        </Button>
  
        <div className="flex-1 text-center">
          <h1 className="text-xl font-normal text-[#060607] [font-family:'IvyPresto_Display-Regular',Helvetica]">
            Livrr
          </h1>
        </div>
  
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="p-0">
            <ShoppingBasketIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="p-0">
            <UsersIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
    );
  };
  