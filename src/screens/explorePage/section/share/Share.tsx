
import { Card, CardContent } from "../../../../components/ui/card";

// Define content data for reusability
const aboutSections = [
  {
    title: "WHO ARE WE",
    subtitle: "ABOUT US",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper pretium amet consequat lectus eu egestas. Purus morbi amet lobortis ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.",
    image: "https://c.animaapp.com/ma2vu314OllNwO/img/image.png",
  },
  {
    title: "FOUNDATOR",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper pretium amet consequat lectus eu egestas. Purus morbi amet lobortis ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.",
    image: "https://c.animaapp.com/ma2vu314OllNwO/img/image-1.png",
  },
  {
    title: "INFLUENCE FUTURE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper pretium amet consequat lectus eu egestas. Purus morbi amet lobortis ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.",
    image: "https://c.animaapp.com/ma2vu314OllNwO/img/image-2.png",
  },
  {
    title: "EDITORIAL LINE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper pretium amet consequat lectus eu egestas. Purus morbi amet lobortis ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.",
    image: "https://c.animaapp.com/ma2vu314OllNwO/img/image-3.png",
  },
];

export const Share = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[362px] items-start gap-8 mx-auto mt-5">
      {/* ShareIcon section */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <h2 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
              SHARE
            </h2>
          </div>
        </div>

        <Card className="w-full p-0 border border-solid border-[#dedede] rounded-none">
          <CardContent className="flex items-center gap-2.5 p-2.5">
            <img
              className="w-5 h-5"
              alt="Arrow share right"
              src="https://c.animaapp.com/ma2vu314OllNwO/img/arrow-share-right.svg"
            />
            <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
              SHARE THE APP AND GET REWARDS
            </span>
          </CardContent>
        </Card>
      </div>

      {/* About Us section with WHO ARE WE */}
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col items-start justify-center gap-1.5 w-full">
          <span className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
            ABOUT US
          </span>

          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-1">
              <h2 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
                WHO ARE WE
              </h2>
            </div>
          </div>

          <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
            Lorem ipsum dolor sit amet consectetur. Augue lacus volutpat semper
            pretium amet consequat lectus eu egestas. Purus morbi amet lobortis
            ac nam facilisis fusce turpis. Commodo fusce ipsum sagittis mattis
            donec enim. Quam urna fermentum vel malesuada mattis cursus mollis.
          </p>
        </div>

        <img
          className="w-full h-[349px] object-cover"
          alt="About us image"
          src="https://c.animaapp.com/ma2vu314OllNwO/img/image.png"
        />
      </div>

      {/* Remaining sections generated from data */}
      {aboutSections.slice(1).map((section, index) => (
        <div key={index} className="flex flex-col items-start gap-4 w-full mb-5">
          <div className="flex flex-col items-start justify-center gap-1.5 w-full">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1">
                <h2 className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-lg">
                  {section.title}
                </h2>
              </div>
            </div>
          </div>

          <p className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-black text-xs">
            {section.description}
          </p>

          <img
            className="w-full h-[349px] object-cover"
            alt={`${section.title} image`}
            src={section.image}
          />
        </div>
      ))}
    </section>
  );
};
