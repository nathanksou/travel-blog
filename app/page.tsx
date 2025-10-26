import { DestinationCards } from "@/components/home/DestinationCards";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { getAllDestinationMeta } from "@/lib/apis";

export default async function Home() {
  try {
    const destinations = await getAllDestinationMeta();

    if (!destinations || destinations.length === 0) {
      return (
        <>
          <Header />
          <main className="flex-1 flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
              <h2 className="text-xl font-semibold">No destinations found</h2>
              <p className="text-gray-600 mt-2">
                Please check back later for exciting travel destinations.
              </p>
            </div>
          </main>
          <Footer />
        </>
      );
    }

    return (
      <>
        <Header />
        <main className="flex-1 py-12">
          <DestinationCards destinations={destinations} />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error loading destinations:", error);

    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600">
              Error loading destinations
            </h2>
            <p className="text-gray-600 mt-2">Please try again later.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
