import { memo } from "react";
import { Destination } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type RecommendationCardsProps = {
  recommendations: Destination["recommendations"];
};

export const RecommendationCards = memo(({
  recommendations = [],
}: RecommendationCardsProps) => {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <section className="mb-8">
      <SectionHeader>Top Recommendations</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recommendations.map((recommendation, index) => (
          <Card key={index} className="relative overflow-hidden">
            {/* Accent indicator bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#B3C8CF]" />
            <CardContent className="pt-6 pl-8 pr-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    {recommendation.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {recommendation.description}
                  </p>
                </div>
                {/* Star icon moved to right */}
                <Star className="h-5 w-5 mt-0.5 flex-shrink-0 text-yellow-500 fill-yellow-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
});

RecommendationCards.displayName = "RecommendationCards";
