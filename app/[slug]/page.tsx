import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { getAllDestinationMeta, getDestinationBySlug } from "@/lib/apis";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const destinations = await getAllDestinationMeta();
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const destination = await getDestinationBySlug(slug);

  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name} | Travel Blog`,
    openGraph: {
      title: destination.name,
      // images: [{ url: destination.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const destination = await getDestinationBySlug(slug);

  // Show 404 page if overview is not found
  if (!destination) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="flex flex-start items-center">
        <Link href="/" aria-label="Back to home">
          <ChevronLeftIcon className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-3xl font-bold">{destination.name}</h1>
      </header>
      <p>{destination.overview}</p>
      <p>{destination.recommendations.join(", ")}</p>
      {destination.tips.map((tip, index) => (
        <div key={`${index}`}>
          <h2 className="text-xl font-bold">{tip.heading}</h2>
          <p>{tip.details}</p>
        </div>
      ))}
    </main>
  );
}
