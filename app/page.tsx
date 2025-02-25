import { DestinationCards } from "@/components/home/DestinationCards";
import { getAllDestinationMeta } from "@/lib/apis";

export default async function Home() {
  try {
    const destinations = await getAllDestinationMeta();

    if (!destinations || destinations.length === 0) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-xl font-semibold">No destinations found</h2>
          <p className="text-gray-600 mt-2">
            Please check back later for exciting travel destinations.
          </p>
        </div>
      );
    }

    return (
      <div className="p-8">
        <DestinationCards destinations={destinations} />
      </div>
    );
  } catch (error) {
    console.error("Error loading destinations:", error);

    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Error loading destinations
        </h2>
        <p className="text-gray-600 mt-2">Please try again later.</p>
      </div>
    );
  }
}
