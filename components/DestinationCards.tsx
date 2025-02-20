import { DestinationCard } from "@/components/DestinationCard";
import { DestinationMeta } from "@/lib/types";

export function DestinationCards({
  destinations,
}: {
  destinations: DestinationMeta[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
      {destinations.map((destination) => (
        <DestinationCard key={destination.slug} destination={destination} />
      ))}
    </div>
  );
}
