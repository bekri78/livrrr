import React from "react";
import { ArticleItemSection } from "./sections/ArticleItemSection";
import { ArticleListSection } from "./sections/ArticleListSection";
import { DeliveryTrackingSection } from "./sections/DeliveryTrackingSection";

export const FindYourArticles = (): JSX.Element => {
  return (
    <div className="flex flex-col px-5 w-full max-w-md mx-auto bg-white">
      <DeliveryTrackingSection />
      <ArticleItemSection />
      <ArticleListSection />
    </div>
  );
};
