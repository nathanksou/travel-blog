import type { BlogOverview } from "@/lib/getOverviews";
import { getAllOverviews, getOverviewBySlug } from "@/lib/getOverviews";
import { getPostBySlug } from "@/lib/getPosts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllOverviews().map((overview: BlogOverview) => ({
    slug: overview.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const overview = getOverviewBySlug(slug);

  if (!overview) return { title: "Blog Post Overview Not Found" };

  return {
    title: `${overview.title} | Travel Blog`,
    openGraph: {
      title: overview.title,
      images: [{ url: overview.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const overview = getOverviewBySlug(slug);
  const post = getPostBySlug(slug);

  // Show 404 page if overview is not found
  if (!overview || !post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="flex flex-start items-center">
        <Link href="/" aria-label="Back to home">
          <ChevronLeftIcon className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-3xl font-bold">{overview.title}</h1>
      </header>
      <p>{post.top.join(", ")}</p>
    </main>
  );
}
