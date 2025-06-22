
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const Navbar= (): JSX.Element => {
  // Define navigation items for better maintainability
  const navItems = [
    { id: "all", label: "VIEW ALL", active: true },
    { id: "bestsellers", label: "MEILLEURES VENTES" },
    { id: "lips", label: "LIPS" },
    { id: "eyes", label: "EYES" },
    { id: "face", label: "FACE" },
    { id: "preowned", label: "PRE-OWNED" },
  ];

  return (
    <nav className="w-full py-4">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex gap-1 bg-transparent h-auto p-0">
          {navItems.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className={`px-0 py-0 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none [font-family:'Futura_PT-Book',Helvetica] font-normal text-xs tracking-[0] leading-normal data-[state=active]:text-black data-[state=inactive]:text-[#a6a6a6]`}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
};
