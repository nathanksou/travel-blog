import { getAllDestinationMeta, getDestinationBySlug } from "@/lib/apis";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { TipsAccordion } from "@/components/TipsAccordion";
import { DestinationHeader } from "@/components/DestinationHeader";
import { RecommendationCards } from "@/components/RecommendationCards";

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
      <DestinationHeader title={destination.name} />
      <Separator />
      <p>{destination.overview}</p>
      <RecommendationCards recommendations={destination.recommendations} />
      <TipsAccordion tips={destination.tips} />
    </main>
  );
}
