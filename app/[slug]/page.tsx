import { getAllDestinationMeta, getDestinationBySlug } from "@/lib/apis";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { DestinationHeader } from "@/components/destination/DestinationHeader";
import { TipsAccordion } from "@/components/destination/TipsAccordion";
import { RecommendationCards } from "@/components/destination/RecommendationCards";
import { ActivitiesAccordion } from "@/components/destination/ActivitiesAccordion";
import { SuburbsAccordion } from "@/components/destination/SuburbsAccordion";

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
    title: `${destination.name} | Nate's Travel Recs`,
    openGraph: {
      title: destination.name,
      // images: [{ url: destination.image }],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = await getDestinationBySlug(slug);

  if (!destination) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <DestinationHeader title={destination.name} />
      <Separator className="my-4" />
      <Image
        priority
        src={destination.overviewImage}
        alt={destination.name}
        width={2000}
        height={1000}
        className="w-full h-auto rounded-lg"
      />
      <p className="whitespace-pre-line mt-4">{destination.overviewText}</p>
      <TipsAccordion tips={destination.tips} />
      <RecommendationCards recommendations={destination.recommendations} />
      <ActivitiesAccordion activities={destination.activities} />
      <SuburbsAccordion suburbs={destination.suburbs} />
    </main>
  );
}
