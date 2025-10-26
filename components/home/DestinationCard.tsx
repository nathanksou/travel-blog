import { Card, CardContent } from "@/components/ui/card";
import { DestinationMeta } from "@/lib/types";
import { MapPin } from "lucide-react";
import Link from "next/link";

type DestinationCardProps = {
  destination: DestinationMeta;
};

export const DestinationCard = ({ destination }: DestinationCardProps) => (
  <Link href={`/${destination.slug}`} className="flex flex-col">
    <Card className="bg-white border border-slate-200 rounded-[14px] overflow-hidden h-full flex flex-col hover:border-[#B3C8CF] transition-colors shadow-sm">
      <div className="bg-slate-100 aspect-[292/219] w-full" />
      <CardContent className="p-5 flex flex-col gap-4 flex-1">
        <h3 className="font-medium text-lg text-slate-900 -tracking-[0.4395px]">
          {destination.name}
        </h3>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-slate-600" />
          <span className="text-sm text-slate-600 -tracking-[0.1504px]">
            {destination.country}
          </span>
        </div>
        <p className="text-sm text-slate-700 -tracking-[0.1504px] line-clamp-2">
          {destination.description}
        </p>
      </CardContent>
    </Card>
  </Link>
);
