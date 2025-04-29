
import { Card, CardContent } from "../../../../components/ui/card";

export const Journal = (): JSX.Element => {
  // Data for journal articles to enable mapping
  const journalArticles = [
    {
      id: 1,
      image: "https://c.animaapp.com/ma2vu314OllNwO/img/image-33-1.png",
      category: "LOREM",
      title: "LOREM IPSUM DOLOR SIT AMET",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/ma2vu314OllNwO/img/image-33-1.png",
      category: "LOREM",
      title: "LOREM IPSUM DOLOR SIT AMET",
      description:
        "Lorem ipsum dolor sit amet consectetur. Facilisi dictum ac facilisi cras eros scelerisque pretium porta. Ipsum a varius eu nibh. Consectetur turpi;",
    },
  ];

  return (
    <section className="w-full bg-black p-6 overflow-hidden mt-5">
      <div className="flex justify-between items-start mb-10">
        <div className="flex flex-col gap-1.5">
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-[#c6c4be] text-xs">
            JOURNAL
          </div>
          <div className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm">
            LAST ELEMENTS
          </div>
        </div>
        <button className="[font-family:'Futura_PT-Book',Helvetica] font-normal text-white text-sm">
          SEE ALL
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto">
        {journalArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-transparent border-none w-[252px] flex-shrink-0"
          >
            <CardContent className="p-0 flex flex-col gap-2.5">
              <img
                className="w-full h-[356px] object-cover"
                alt="Journal article image"
                src={article.image}
              />
              <img
                className="w-px h-14"
                alt="Separator line"
                src="https://c.animaapp.com/ma2vu314OllNwO/img/line-8.svg"
              />
              <div className="flex flex-col gap-1.5">
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
