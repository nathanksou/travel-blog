import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DestinationMeta } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type DestinationCardProps = {
  destination: DestinationMeta;
};

export const DestinationCard = ({ destination }: DestinationCardProps) => (
  <Link href={`/${destination.slug}`} className="w-full">
    <Card className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-lg cursor-pointer">
      <Image
        src={destination.image}
        alt={destination.name}
        width={400}
        height={350}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent"></div>
      <CardContent className="absolute bottom-4 left-4 text-white">
        <CardTitle className="text-xl text-right">{destination.name}</CardTitle>
      </CardContent>
    </Card>
  </Link>
);
