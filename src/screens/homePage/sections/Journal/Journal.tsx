
import { Card, CardContent } from "../../../../components/ui/card";

// Journal article data for mapping
const journalArticles = [
  {
    id: 1,
    image: "https://c.animaapp.com/ma033d4fpeOHG4/img/image-33-1.png",
    category: "LOREM",
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/ma033d4fpeOHG4/img/image-33-1.png",
    category: "LOREM",
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
  },
];

export const Journal = (): JSX.Element => {
  return (
    <section className="w-full bg-black overflow-hidden p-10">
      <div className="flex items-start justify-between gap-1.5 mb-8">
        <div className="flex flex-col items-start justify-center gap-1.5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
            JOURNAL
          </div>
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm">
            LAST ELEMENTS
          </div>
        </div>
        <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm cursor-pointer">
          SEE ALL
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        {journalArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-transparent border-none w-full md:w-[282px]"
          >
            <CardContent className="flex flex-col items-start gap-2.5 p-0">
              <img
                className="w-full h-[356px] object-cover"
                alt="Journal article image"
                src={article.image}
              />
              <img
                className="w-px h-14 object-cover"
                alt="Separator line"
                src="https://c.animaapp.com/ma033d4fpeOHG4/img/line-8.svg"
              />
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
                  {article.category}
                </div>
                <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm">
                  {article.title}
                </div>
                <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-xs">
                  {article.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
