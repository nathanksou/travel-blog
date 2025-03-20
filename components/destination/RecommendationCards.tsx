import { Destination } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

type RecommendationCardsProps = {
  recommendations: Destination["recommendations"];
};

export const RecommendationCards = ({
  recommendations = [],
}: RecommendationCardsProps) => (
  <div className="my-6">
    <h2 className="text-xl font-bold">Recommendations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {recommendations.map((recommendation, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <p className="text-center">{recommendation}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
