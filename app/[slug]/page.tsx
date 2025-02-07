import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import {
  Destination,
  getAllDestinations,
  getDestinationBySlug,
} from "@/lib/destinations";
import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllDestinations().map((destination: Destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);

  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name} | Travel Blog`,
    openGraph: {
      title: destination.name,
      images: [{ url: destination.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const destination = getDestinationBySlug(slug);
  const post = getPostBySlug(slug);

  // Show 404 page if overview is not found
  if (!destination || !post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="flex flex-start items-center">
        <Link href="/" aria-label="Back to home">
          <ChevronLeftIcon className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-3xl font-bold">{destination.name}</h1>
      </header>
      <p>{post.overview}</p>
      <p>{post.recommendations.join(", ")}</p>
      {post.tips.map((tip, index) => (
        <div key={`${index}`}>
          <h2 className="text-xl font-bold">{tip.heading}</h2>
          <p>{tip.details}</p>
        </div>
      ))}
    </main>
  );
}
