import {
    ChevronDownIcon,
    PackageIcon,
    PlayIcon,
    ShoppingBasketIcon,
    UsersIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  
  export const Journal = (): JSX.Element => {
    // Data for content sections to enable mapping
    const contentSections = [
      {
        id: 1,
        type: "article",
        category: "WELL BEING",
        title: "HOW TO FEEL GOOD IN SUMMER",
        description:
          "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image-33.png",
      },
      {
        id: 2,
        type: "section",
        title: "EDITORIAL",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image.png",
      },
      {
        id: 3,
        type: "section",
        title: "ARCHIVES",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image-1.png",
      },
      {
        id: 4,
        type: "video",
        title: "TUTORIAL: HOW TO STYLE A BAG",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image-2.png",
      },
      {
        id: 5,
        type: "article",
        category: "LOREM",
        title: "LOREM IPSUM DOLOR SIT AMET",
        description:
          "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image-33-1.png",
      },
      {
        id: 6,
        type: "video",
        title: "ART DE VIVRE",
        image: "https://c.animaapp.com/maczburrXyVxc2/img/image-3.png",
      },
    ];
  
    return (
      <div className="relative w-[402px] h-[2416px] bg-black overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="flex w-[362px] items-center gap-16 absolute top-[41px] left-5">
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 px-2 py-1 rounded border-[0.5px] border-solid border-white bg-transparent"
          >
            <PackageIcon className="w-5 h-5 text-white" />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs">
              Today
            </span>
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </Button>
  
          <div className="inline-flex h-5 items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-[39px] h-[34px] mt-[-8.00px] mb-[-6.00px] [font-family:'IvyPresto_Display-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
              Livrr
            </div>
          </div>
  
          <div className="flex w-[97px] items-center justify-end gap-2 relative">
            <ShoppingBasketIcon className="w-5 h-5 text-white" />
            <UsersIcon className="w-5 h-5 text-white" />
          </div>
        </header>
  
        {/* Livestream Section Header */}
        <section className="flex w-[348px] items-start gap-1.5 absolute top-[115px] left-5">
          <div className="flex flex-col items-start justify-center gap-1.5 relative flex-1 grow">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs tracking-[0] leading-[normal]">
              LIVESTREAM
            </div>
            <div className="relative w-fit [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              LIVRR&apos;S LIVE
            </div>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm"
          >
            SEE ALL
          </Button>
        </section>
  
        {/* Livestream Video Thumbnails */}
        <div className="inline-flex items-center gap-5 absolute top-[178px] left-5">
          <Card className="w-[255px] h-[179px] bg-[url(https://c.animaapp.com/maczburrXyVxc2/img/image-40.png)] bg-[100%_100%] border-0 rounded-none relative">
            <CardContent className="p-0 flex items-center justify-center h-full">
              <PlayIcon className="w-5 h-5 text-white" />
            </CardContent>
          </Card>
  
          <Card className="relative w-[255px] h-[179px] border-0 rounded-none">
            <CardContent className="p-0">
              <img
                className="absolute w-[107px] h-[179px] top-0 left-0"
                alt="Image"
                src="https://c.animaapp.com/maczburrXyVxc2/img/image-40-1.png"
              />
            </CardContent>
          </Card>
        </div>
  
        {/* Main Content Sections */}
        <div className="flex flex-col w-[362px] items-start gap-[60px] absolute top-[396px] left-5">
          {contentSections.map((section) => (
            <React.Fragment key={section.id}>
              {section.type === "article" && (
                <Card className="flex items-center gap-5 relative self-stretch w-full border-0 rounded-none bg-transparent">
                  <CardContent className="p-0 flex flex-col w-[359px] items-start gap-2.5">
                    <img
                      className="relative self-stretch w-full h-[234px] object-cover"
                      alt={section.title}
                      src={section.image}
                    />
                    <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs tracking-[0] leading-[normal]">
                        {section.category}
                      </div>
                      <div className="relative w-fit [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                        {section.title}
                      </div>
                      <div className="relative self-stretch [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
                        {section.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
  
              {section.type === "section" && (
                <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                      {section.title}
                    </div>
                  </div>
                  <Card className="relative self-stretch w-full h-[242px] border-0 rounded-none">
                    <CardContent className="p-0">
                      <img
                        className="w-full h-full object-cover"
                        alt={section.title}
                        src={section.image}
                      />
                    </CardContent>
                  </Card>
                </div>
              )}
  
              {section.type === "video" && (
                <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                      {section.title}
                    </div>
                  </div>
                  <Card className="relative self-stretch w-full h-[179px] border-0 rounded-none">
                    <CardContent className="p-0 relative w-full h-full bg-[url(${section.image})] bg-cover bg-[50%_50%] flex items-center justify-center">
                      <PlayIcon className="w-5 h-5 text-white" />
                    </CardContent>
                  </Card>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  