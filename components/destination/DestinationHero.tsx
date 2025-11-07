import Image from "next/image";

type DestinationHeroProps = {
  name: string;
  image: string;
};

export const DestinationHero = ({
  name,
  image,
}: DestinationHeroProps) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] mb-8">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
};
