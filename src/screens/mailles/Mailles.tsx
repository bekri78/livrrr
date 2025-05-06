import { useNavigate } from "react-router-dom";
import {
    ArrowLeftIcon,
    ChevronDownIcon,
    GridIcon,
    HomeIcon,
    MessageCircleIcon,
    PackageIcon,
    ShoppingBasketIcon,
    StarIcon,
    UsersIcon,
  } from "lucide-react";
  
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  
  export const Mailles = (): JSX.Element => {
      const navigate = useNavigate();
    // Product data for mapping
    const products = [
      {
        id: 1,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-27-3.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 2,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 3,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-1.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 4,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-2.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 5,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-3.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 6,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-4.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 7,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-27-3.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
      {
        id: 8,
        image: "https://c.animaapp.com/macxdpyh1rOCHx/img/image-27-3.png",
        title: "ARTICLE 1",
        price: "60.90 EUR",
      },
    ];
  
    // Navigation items
    const navItems = [
      { icon: <HomeIcon className="w-5 h-5" />, label: "Home", active: false },
      { icon: <GridIcon className="w-5 h-5" />, label: "Explore", active: true },
      {
        icon: <StarIcon className="w-5 h-5" />,
        label: "Services",
        active: false,
      },
      {
        icon: <MessageCircleIcon className="w-5 h-5" />,
        label: "Chat",
        active: false,
      },
    ];
  
    return (
      <div className="relative w-[402px] h-[874px] bg-white overflow-hidden">
        {/* Top navigation bar */}
        <header className="flex w-[362px] items-center gap-16 absolute top-10 left-5">
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 px-2 py-1 rounded border-[0.5px] border-solid border-black h-auto"
          >
            <PackageIcon className="w-5 h-5" />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              Today
            </span>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
  
          <div className="inline-flex h-5 items-center gap-4 relative flex-[0_0_auto]">
            <h1 className="relative w-[39px] h-[34px] mt-[-8.00px] mb-[-6.00px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-[#060607] text-xl tracking-[0] leading-[normal]">
              Livrr
            </h1>
          </div>
  
          <div className="flex w-[97px] items-center justify-end gap-2 relative">
            <Button variant="ghost" className="p-0 h-auto">
              <ShoppingBasketIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="p-0 h-auto">
              <UsersIcon className="w-5 h-5" />
            </Button>
          </div>
        </header>
  
        {/* Category navigation */}
        <div className="inline-flex items-center gap-1.5 absolute top-[84px] left-[26px]">
          <Button variant="ghost" className="p-0 h-auto">
            <ArrowLeftIcon className="w-3.5 h-3.5" />
          </Button>
          <div  onClick={() => navigate("/explore")} className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <span  className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
              MAILLES
            </span>
          </div>
        </div>
  
        {/* Featured product image */}
        <img
          className="absolute w-[362px] h-[499px] top-[115px] left-5 object-cover"
          alt="Featured product"
          src="https://c.animaapp.com/macxdpyh1rOCHx/img/image-27.png"
        />
  
        {/* Product grid */}
        <div className="absolute w-[402px] h-[1053px] top-[634px] left-0">
          <div className="flex flex-col w-[362px] items-start gap-[19px] absolute top-0 left-5">
            {/* Product grid using Card components */}
            {[0, 2, 4, 6].map((startIndex) => (
              <div
                key={startIndex}
                className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
              >
                {[0, 1].map((offset) => {
                  const index = startIndex + offset;
                  if (index < products.length) {
                    return (
                      <Card
                        key={products[index].id}
                        className="flex-1 border-none shadow-none"
                      >
                        <CardContent className="flex flex-col items-start gap-2 p-0">
                          <img
                            className="relative self-stretch w-full h-[210px] object-cover"
                            alt={`Product ${products[index].id}`}
                            src={products[index].image}
                          />
                          <div className="flex flex-col w-[50px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs tracking-[0] leading-[normal]">
                              {products[index].title}
                            </div>
                            <div className="relative self-stretch [font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-[9px] tracking-[0] leading-[normal]">
                              {products[index].price}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
  
          {/* Bottom navigation */}
          <nav className="flex w-[402px] h-[60px] items-center justify-between px-[26px] py-2.5 absolute top-[180px] left-0 bg-white border-t border-[#e1e1e1]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-0.5 relative flex-1 grow"
              >
                {item.icon}
                <div
                  className={`relative w-fit [font-family:'General_Sans-Regular',Helvetica] font-normal ${item.active ? "text-black" : "text-[#8a8a8a]"} text-[10px] tracking-[0] leading-[normal]`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    );
  };
  