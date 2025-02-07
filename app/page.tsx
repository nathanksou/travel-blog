import { DestinationCard } from "@/components/DestinationCard";
import { getAllDestinations } from "@/lib/destinations";

export default function Home() {
  const destinations = getAllDestinations();

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
        {destinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </div>
  );
}
