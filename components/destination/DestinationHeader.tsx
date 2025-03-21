import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Destination } from "@/lib/types";
import Link from "next/link";

type DestinationHeaderProps = {
  title: Destination["name"];
};

export const DestinationHeader = ({ title }: DestinationHeaderProps) => {
  if (!title) return null;

  return (
    <header className="flex flex-start items-center">
      <Link href="/" aria-label="Back to home">
        <ChevronLeftIcon className="h-6 w-6 mr-2" />
      </Link>
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
};
