import { DestinationCard } from "@/components/DestinationCard";
import { getAllDestinationMeta } from "@/lib/apis";

export default async function Home() {
  // TODO: Add a loading state
  // TODO: Add a error state
  // TODO: Add a no results state
  const destinations = await getAllDestinationMeta();

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
