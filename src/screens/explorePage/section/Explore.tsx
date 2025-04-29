import {
    ChevronDownIcon,
    PackageIcon,
    ShoppingBasketIcon,
    UsersIcon,
  } from "lucide-react";

  import { Button } from "../../../components/ui/button";
  import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
  import { Share } from "./share";
  import { SeeAll } from "./seeAll";
  import { Journal } from "./journal";
  
  export const Explore = (): JSX.Element => {
    // Category tabs data
    const categories = [
      { id: 1, name: "FEMME", active: true },
      { id: 2, name: "HOMME", active: false },
      { id: 3, name: "ENFANTS", active: false },
    ];
  
    return (
      <div
        className="relative w-full   bg-white overflow-hidden flex flex-col "
        data-model-id="428:474"
      >
        {/* Top navigation bar */}
        <header className="flex w-full items-center justify-between px-5 pt-10 pb-4">
          <Button
            variant="outline"
            size="sm"
            className="h-8 flex items-center gap-2 rounded border-[0.5px] border-solid border-black"
          >
            <PackageIcon className="w-5 h-5" />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              Today
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
  
          <div className="flex items-center">
            <h1 className="[font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl">
              Livrr
            </h1>
          </div>
  
          <div className="flex items-center gap-2">
            <ShoppingBasketIcon className="w-5 h-5" />
            <UsersIcon className="w-5 h-5" />
          </div>
        </header>
  
        {/* Category tabs */}
        <Tabs defaultValue="FEMME" className="px-5 mb-4">
          <TabsList className="bg-transparent p-0 h-auto gap-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.name}
                className={`p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs ${
                  category.active ? "text-black" : "text-[#a6a6a6]"
                }`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
  
        {/* Main content sections */}
        <main className="flex flex-col w-full">
          <SeeAll />
          <Journal />
          <Share />
        </main>
      </div>
    );
  };
  