import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type DestinationNavProps = {
  name: string;
};

export const DestinationNav = ({ name }: DestinationNavProps) => {
  return (
    <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#B3C8CF]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Back button - left */}
        <Link
          href="/"
          className="flex items-center text-sm text-slate-700 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to destinations
        </Link>

        {/* Destination name - center */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-slate-900">
          {name}
        </h1>

        {/* Empty div for layout balance */}
        <div className="w-[140px]" />
      </div>
    </nav>
  );
};
