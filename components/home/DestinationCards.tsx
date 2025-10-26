import { DestinationCard } from "@/components/home/DestinationCard";
import { DestinationMeta } from "@/lib/types";

type DestinationCardsProps = {
  destinations: DestinationMeta[];
};

export const DestinationCards = ({ destinations }: DestinationCardsProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1300px] mx-auto px-14">
    {destinations.map((destination) => (
      <DestinationCard key={destination.slug} destination={destination} />
    ))}
  </div>
);
