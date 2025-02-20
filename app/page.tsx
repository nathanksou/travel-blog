import { DestinationCards } from "@/components/DestinationCards";
import { getAllDestinationMeta } from "@/lib/apis";

export default async function Home() {
  // TODO: Add a loading state
  // TODO: Add a error state
  // TODO: Add a no results state
  const destinations = await getAllDestinationMeta();

  return (
    <div className="p-8">
      <DestinationCards destinations={destinations} />
    </div>
  );
}
