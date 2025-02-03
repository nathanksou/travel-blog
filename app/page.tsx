import { getAllOverviews } from "@/lib/getOverviews";
import Link from "next/link";

export default function Home() {
  const overviews = getAllOverviews();

  return (
    <div className="py-4">
      {overviews.map((overview) => (
        <div key={overview.slug}>
          <Link href={`/${overview.slug}`}>
            <h1>{overview.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
