import { getAllDestinationMeta, getDestinationBySlug } from "@/lib/apis";
import { notFound } from "next/navigation";
import { DestinationNav } from "@/components/destination/DestinationNav";
import { DestinationHero } from "@/components/destination/DestinationHero";
import { TipsAccordion } from "@/components/destination/TipsAccordion";
import { RecommendationCards } from "@/components/destination/RecommendationCards";
import { ActivitiesAccordion } from "@/components/destination/ActivitiesAccordion";
import { SuburbsAccordion } from "@/components/destination/SuburbsAccordion";
import { SectionHeader } from "@/components/ui/section-header";

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
    title: destination.name,
    description: destination.description,
    openGraph: {
      title: destination.name,
      description: destination.description,
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination = await getDestinationBySlug(slug);

  if (!destination) return notFound();

  return (
    <main>
      <DestinationNav name={destination.name} />
      <DestinationHero
        name={destination.name}
        description={destination.description}
      />
      <div className="max-w-3xl mx-auto px-6 pb-12">
        {/* Overview Section */}
        <section className="mb-8">
          <SectionHeader>Overview</SectionHeader>
          <p className="whitespace-pre-line text-slate-700 leading-relaxed">
            {destination.overviewText}
          </p>
        </section>

        <TipsAccordion tips={destination.tips} />
        <RecommendationCards recommendations={destination.recommendations} />
        <ActivitiesAccordion activities={destination.activities} />
        <SuburbsAccordion suburbs={destination.suburbs} />
      </div>
    </main>
  );
}
