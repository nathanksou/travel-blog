import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Destination } from "@/lib/destinations";
import Image from "next/image";
import Link from "next/link";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/${destination.slug}`} className="w-full">
      <Card className="w-full h-[400px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
        {/* Image section (Takes up 350px height) */}
        <CardHeader className="p-0 h-[350px]">
          <Image
            src={destination.image}
            alt={destination.name}
            width={400}
            height={350}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </CardHeader>

        {/* Title section (50px height, centered) */}
        <CardContent className="h-[50px] flex items-center justify-center p-4">
          <CardTitle className="text-xl text-center">
            {destination.name}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
